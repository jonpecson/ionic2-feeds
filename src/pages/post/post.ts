import { AngularFire } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { Data } from './../../providers/data';

/**
 * Generated class for the Post page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


class Post {
  title : string
  body: string
  id: string

  constructor(){
  }
}

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post: Post = new Post();
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
  }

  submit(){
    // this._data.addPost(this.post); // Adds the post
    // this.post = new Post(); // Clear out the old post data

    this.af.database.list('/posts').push(this.post);

    this.navCtrl.parent.select(0); // Goto parent tab - child 0 (Feeds page)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Post');
  }

}
