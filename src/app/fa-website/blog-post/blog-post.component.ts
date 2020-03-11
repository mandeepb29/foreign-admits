import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  blog;
  constructor(public route: ActivatedRoute, public common: CommonService) { }

  ngOnInit() {
    this.route.params.subscribe(result=> {
      this.common.getSingleBlogs(result.id)
      .subscribe(result=> {
        this.blog = result.result[0]
      })
    })
  }

}
