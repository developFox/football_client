import {Component} from '@angular/core';
import {CoachInfoService} from './coachInfo.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-coach-info',
  templateUrl: './coachInfo.component.html',
})
export class CoachInfoComponent {
  coachInfo: InterFaceCoachInfo = {
    id: '',
    images: '',
    year: '',
    region: '',
    city: '',
    fio: '',
    birth_date: '',
    email: '',
    confirmation: '',
    phone: ''
  };
  coachId: null;

  constructor(private coachInfoService: CoachInfoService,
              private router: ActivatedRoute) {
    this.router.params.subscribe(
      (params: Params): void => {
        this.coachId = params.id;

        this.getCoach();
      }
    );
  }

  getCoach() {
    this.coachInfoService.getCoachInfo({id: this.coachId}).then((data: InterFaceCoachInfo) => {
        this.coachInfo = data;
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по футболисту: ', error);
      });
  }
}


