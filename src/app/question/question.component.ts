import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import $ from 'jquery';

export interface Recommendation {
  id: Number,
  question: String,
  answer: String
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  recommendation: Recommendation[];
  private recommendationUrl = 'http://localhost:8080/';
  newQuestion: String;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getRecommendation(event: any) {
    $(event.target).addClass('loading');
    this.http.post(this.recommendationUrl + 'getRecommendation', {"question": this.newQuestion}).subscribe(data => {
      this.recommendation = [];
      for (let req in data) {
        if (data[req]) {
          this.recommendation.push({id: data[req].id, question: data[req].content, answer: data[req].answer});
        }
      }
      console.log(this.recommendation);
      $(event.target).removeClass('loading');
    });
  }

  showAnswer(event: any, id: Number) {
    event.preventDefault();
    $('.answer-content-' + id).toggle();
  }
}
