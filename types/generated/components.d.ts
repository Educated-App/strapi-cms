import type { Schema, Attribute } from '@strapi/strapi';

export interface CoursesChapters extends Schema.Component {
  collectionName: 'components_courses_chapters';
  info: {
    displayName: 'chapters';
  };
  attributes: {
    title: Attribute.String;
    lessons: Attribute.Relation<
      'courses.chapters',
      'oneToMany',
      'api::lesson.lesson'
    >;
  };
}

export interface CoursesFaq extends Schema.Component {
  collectionName: 'components_courses_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    question: Attribute.String;
    answear: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'courses.chapters': CoursesChapters;
      'courses.faq': CoursesFaq;
    }
  }
}
