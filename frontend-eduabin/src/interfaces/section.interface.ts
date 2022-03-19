export interface RelatedSector {
  image_url: string;
  name: string;
  sector_uuid: string;
  sector_image: string;
}

export interface RelatedCategory {
  image_url: string;
  related_sector: RelatedSector[];
  name: string;
  category_uuid: string;
  category_image: string;
}

export interface ISectionDetail {
  image_url: string;
  related_category: RelatedCategory[];
  name_section: string;
  section_uuid: string;
  section_image: string;
}
