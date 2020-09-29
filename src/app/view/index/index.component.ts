import { Component, OnInit , ElementRef , AfterViewChecked , ViewChild  } from '@angular/core';
import { GitService } from 'src/app/services/git.service';
import { FormGroup , FormControl , FormBuilder } from '@angular/forms';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { MatDialog } from '@angular/material/dialog';
import { WarningComponent } from 'src/app/components/warning/warning.component';

// icon
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})


export class IndexComponent implements OnInit , AfterViewChecked{

  @ViewChild('secElement') secElement: ElementRef;


  // material form
  formValue: string;
  // -------------------------------


  searchName: string;
  liItems: any;
  generateShow = false;
  followingShow = false;
  userWarehouseArr: any[];
  userFollowingArr: any[];
  timelineShow = false;
  searchForm: any;

  config: SwiperConfigInterface;

  constructor(
    private elementRef: ElementRef ,
    private gitService: GitService ,
    public dialog: MatDialog ,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.searchForm = new FormGroup({
      searchCont: new FormControl(),
    });

    this.config = {
      direction: 'horizontal',
      grabCursor: true,
      // centeredSlides: true,
      loop: false,
      autoplay: false,
      speed: 300,
      coverflowEffect: {
        rotate: 0,
        stretch: 200,
        depth: 200,
        modifier: 1,
        slideShadows: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.8,
          spaceBetween: 25,
        },
        600: {
          slidesPerView: 2.7,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4.3,
          spaceBetween: 35
        },
        1240: {
          slidesPerView: 4.8,
          spaceBetween: 40
        }
      }
    };


    this.matIconRegistry.addSvgIconInNamespace( 'custom-svg', 'angular', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/delete.svg'));
  }


  ngOnInit(): void {

    // ---------------------------------------------------------------------------
    // 可觀察form物件
    // const searchBox = document.getElementById('search-box');
    // const typeahead = fromEvent(searchBox, 'input').pipe(
    //   map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
    //   filter(text => text.length > 0),
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   switchMap((user) => ajax(`https://api.github.com/users/${user}/following`))
    // );
    // typeahead.subscribe(data => {
    //   console.log(data);
    //  });
    // ---------------------------------------------------------------------------


  }

  onSubmit(): void {
    this.reset( this.searchForm.value.searchCont );
    this.service( this.searchForm.value.searchCont );
  }

  onMatSubmit(): void{
    this.reset( this.formValue );
    if (this.formValue  !== '' && this.formValue  !== undefined){
      this.service( this.formValue );
    }
  }

  service(user: string): void{

    this.gitService.getUser(user).subscribe( (data) => {
      // console.log(data);
      this.userWarehouseArr = data;
      this.generateShow = true;
    }, (err) => {
      this.dialog.open(WarningComponent);
    });

    this.gitService.getUserByFollowing(user).subscribe( (data) => {
      // console.log(data);
      this.userFollowingArr = data;
      this.followingShow = true;
    }, (err) => {
      // console.log(err)
    });
  }

  generate(): void {
    this.timelineShow = true;

    // setTimeout(() => {
    //   this.liItems = this.elementRef.nativeElement.querySelectorAll('.timeline li');
    // }, 0);
    this.monitorBySlideIn();
  }

  reset(user: string ): void{
    this.searchName = user;
    this.timelineShow = false;
    this.generateShow = false;
    this.followingShow = false;
    this.userWarehouseArr = [];
    this.userFollowingArr = [];
  }

  // ----------------------------- //
  // ------ Animation start ------ //
  // ----------------------------- //

  monitorBySlideIn(): void{
    window.addEventListener('load', () => {
      this.callbackFunc(this.liItems);
    });
    window.addEventListener('resize', () => {
      this.callbackFunc(this.liItems);
    });
    window.addEventListener('scroll', () => {
      this.callbackFunc(this.liItems);
    });
  }

  isElementInViewport(el: any ): any{
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  callbackFunc(liItems: any): void {
    for (const item of liItems) {
      if (this.isElementInViewport(item)) {
        item.classList.add('in-view');
      }
    }
  }


  // ----------------------------- //
  // --------- lifecycle --------- //
  // ----------------------------- //
  ngAfterViewChecked(): void{
    if ( this.timelineShow === true ){
      this.liItems = this.elementRef.nativeElement.querySelectorAll('.timeline li');
    }
  }

}



// octocat  &  abc

// 修改修改修改修改修改修改修改修改修改修改