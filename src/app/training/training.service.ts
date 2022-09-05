import { Subject } from "rxjs";
import { Exercise } from "./exercise.module";

export class TrainingService {

  exerciseChanged = new Subject<Exercise>();

  private availableExercies: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8},
    { id: 'legs', name:'Legs', duration: 180, calories: 15},
    { id: 'cardio', name: 'Cardio', duration: 120, calories: 18},
    { id: 'touch-toes', name: 'Touch Toes', duration: 60, calories: 10},
    { id: 'side-lunges', name: 'Side Lunges', duration: 10, calories: 5},
    { id: 'burpees', name: 'Burpees', duration: 180, calories: 50}
  ];

  private runningExerciese!: any;

  getAvailableExercieses() {
    return this.availableExercies.slice();
  }

  startExerciese(selectedExerciseId: string) {
    this.runningExerciese = this.availableExercies.find(ex => ex.id === selectedExerciseId);
    this.exerciseChanged.next({...this.runningExerciese});
  }

  getRunningExerciese() {
    return {...this.runningExerciese};
  }

}
