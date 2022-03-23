import { IAuthor } from './course.interface'

export interface ICartCourse {
  comments: any[];
  author: IAuthor;
  modules: any[];
  student_no: number;
  total_modules: number;
  total_duration: string;
  image_url: string;
  course_name: string;
  main_image: string;
  description: string;
  valoration: number;
  price: string;
  objectives: string;
  last_update: Date;
  state: string;
  course_uuid: string;
}
