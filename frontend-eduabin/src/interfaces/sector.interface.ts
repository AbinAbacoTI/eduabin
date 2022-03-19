
export interface Author {
  name: string;
}

export interface IRelatedCourse {
  id: number;
  course_uuid: string;
  course_name: string;
  author: Author;
  image_url: string;
  valoration: number;
  price: string;
}
export interface IContentDivisionTrue {
  related_course: IRelatedCourse[];
  name: string;
  division_uuid: string;
  image_url: string;
}

export interface ISectorDivisionTrue {
  name: string;
  sector_uuid: string;
  sector_image: string;
  content: IContentDivisionTrue[];
  division_exist: boolean;
}

export interface IContentDivisionFalse {
  id: number;
  course_uuid: string;
  course_name: string;
  author: Author;
  image_url: string;
  valoration: number;
  price: string;
}

export interface ISectorIdDivisionFalse {
  name: string;
  sector_uuid: string;
  sector_image: string;
  content: IContentDivisionFalse[];
  division_exist: boolean;
}
