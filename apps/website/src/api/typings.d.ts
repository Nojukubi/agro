export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockActionsDynamicZoneInput: any;
  DateTime: any;
  DocFilesDynamicZoneInput: any;
  FooterLinksDynamicZoneInput: any;
  I18NLocaleCode: any;
  JSON: any;
  Upload: any;
};

export type Block = {
  __typename?: 'Block';
  actions?: Maybe<Array<Maybe<BlockActionsDynamicZone>>>;
  align_actions?: Maybe<Enum_Block_Align_Actions>;
  align_content?: Maybe<Enum_Block_Align_Content>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<BlockRelationResponseCollection>;
  name: Scalars['String'];
  type: Enum_Block_Type;
  updatedAt?: Maybe<Scalars['DateTime']>;
  video?: Maybe<ComponentVideoYouTube>;
  width?: Maybe<Scalars['Int']>;
};


export type BlockLocalizationsArgs = {
  filters?: InputMaybe<BlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockActionsDynamicZone = ComponentLinkHref | ComponentLinkRoute | ComponentLinkSocial | Error;

export type BlockEntity = {
  __typename?: 'BlockEntity';
  attributes?: Maybe<Block>;
  id?: Maybe<Scalars['ID']>;
};

export type BlockEntityResponse = {
  __typename?: 'BlockEntityResponse';
  data?: Maybe<BlockEntity>;
};

export type BlockEntityResponseCollection = {
  __typename?: 'BlockEntityResponseCollection';
  data: Array<BlockEntity>;
  meta: ResponseCollectionMeta;
};

export type BlockFiltersInput = {
  align_actions?: InputMaybe<StringFilterInput>;
  align_content?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<BlockFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BlockFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlockFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  video?: InputMaybe<ComponentVideoYouTubeFiltersInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type BlockInput = {
  actions?: InputMaybe<Array<Scalars['BlockActionsDynamicZoneInput']>>;
  align_actions?: InputMaybe<Enum_Block_Align_Actions>;
  align_content?: InputMaybe<Enum_Block_Align_Content>;
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Block_Type>;
  video?: InputMaybe<ComponentVideoYouTubeInput>;
  width?: InputMaybe<Scalars['Int']>;
};

export type BlockRelationResponseCollection = {
  __typename?: 'BlockRelationResponseCollection';
  data: Array<BlockEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentLinkHref = {
  __typename?: 'ComponentLinkHref';
  id: Scalars['ID'];
  style?: Maybe<ComponentLinkText>;
  text: Scalars['String'];
  url: Scalars['String'];
};

export type ComponentLinkHrefFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLinkHrefFiltersInput>>>;
  not?: InputMaybe<ComponentLinkHrefFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLinkHrefFiltersInput>>>;
  style?: InputMaybe<ComponentLinkTextFiltersInput>;
  text?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentLinkHrefInput = {
  id?: InputMaybe<Scalars['ID']>;
  style?: InputMaybe<ComponentLinkTextInput>;
  text?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentLinkRoute = {
  __typename?: 'ComponentLinkRoute';
  builtin?: Maybe<ComponentPageBuiltIn>;
  custom?: Maybe<ComponentRelPage>;
  id: Scalars['ID'];
  style?: Maybe<ComponentLinkText>;
  text: Scalars['String'];
};

export type ComponentLinkSocial = {
  __typename?: 'ComponentLinkSocial';
  icon?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  social?: Maybe<SocialEntityResponse>;
  style?: Maybe<ComponentLinkText>;
  text: Scalars['String'];
};

export type ComponentLinkText = {
  __typename?: 'ComponentLinkText';
  background?: Maybe<Enum_Componentlinktext_Background>;
  color?: Maybe<Enum_Componentlinktext_Color>;
  id: Scalars['ID'];
  underline?: Maybe<Scalars['Boolean']>;
  uppercase?: Maybe<Scalars['Boolean']>;
};

export type ComponentLinkTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLinkTextFiltersInput>>>;
  background?: InputMaybe<StringFilterInput>;
  color?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLinkTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLinkTextFiltersInput>>>;
  underline?: InputMaybe<BooleanFilterInput>;
  uppercase?: InputMaybe<BooleanFilterInput>;
};

export type ComponentLinkTextInput = {
  background?: InputMaybe<Enum_Componentlinktext_Background>;
  color?: InputMaybe<Enum_Componentlinktext_Color>;
  id?: InputMaybe<Scalars['ID']>;
  underline?: InputMaybe<Scalars['Boolean']>;
  uppercase?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentPageBlog = {
  __typename?: 'ComponentPageBlog';
  id: Scalars['ID'];
  tag?: Maybe<Enum_Componentpageblog_Tag>;
  text: Scalars['String'];
};

export type ComponentPageBlogFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPageBlogFiltersInput>>>;
  not?: InputMaybe<ComponentPageBlogFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPageBlogFiltersInput>>>;
  tag?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentPageBlogInput = {
  id?: InputMaybe<Scalars['ID']>;
  tag?: InputMaybe<Enum_Componentpageblog_Tag>;
  text?: InputMaybe<Scalars['String']>;
};

export type ComponentPageBuiltIn = {
  __typename?: 'ComponentPageBuiltIn';
  id: Scalars['ID'];
  name: Enum_Componentpagebuiltin_Name;
};

export type ComponentPageBuiltInFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPageBuiltInFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPageBuiltInFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPageBuiltInFiltersInput>>>;
};

export type ComponentPageBuiltInInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Enum_Componentpagebuiltin_Name>;
};

export type ComponentPageContent = {
  __typename?: 'ComponentPageContent';
  content: Scalars['String'];
  id: Scalars['ID'];
};

export type ComponentPageContentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPageContentFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPageContentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPageContentFiltersInput>>>;
};

export type ComponentPageContentInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentRelBlock = {
  __typename?: 'ComponentRelBlock';
  block?: Maybe<BlockEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentRelBlockFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentRelBlockFiltersInput>>>;
  block?: InputMaybe<BlockFiltersInput>;
  not?: InputMaybe<ComponentRelBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentRelBlockFiltersInput>>>;
};

export type ComponentRelBlockInput = {
  block?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentRelPage = {
  __typename?: 'ComponentRelPage';
  id: Scalars['ID'];
  page?: Maybe<PageEntityResponse>;
};

export type ComponentRelPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentRelPageFiltersInput>>>;
  not?: InputMaybe<ComponentRelPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentRelPageFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
};

export type ComponentRelPageInput = {
  id?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<Scalars['ID']>;
};

export type ComponentVideoYouTube = {
  __typename?: 'ComponentVideoYouTube';
  id: Scalars['ID'];
  url: Scalars['String'];
};

export type ComponentVideoYouTubeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentVideoYouTubeFiltersInput>>>;
  not?: InputMaybe<ComponentVideoYouTubeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentVideoYouTubeFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentVideoYouTubeInput = {
  id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type Doc = {
  __typename?: 'Doc';
  category: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  files: Array<Maybe<DocFilesDynamicZone>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<DocRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type DocLocalizationsArgs = {
  filters?: InputMaybe<DocFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DocEntity = {
  __typename?: 'DocEntity';
  attributes?: Maybe<Doc>;
  id?: Maybe<Scalars['ID']>;
};

export type DocEntityResponse = {
  __typename?: 'DocEntityResponse';
  data?: Maybe<DocEntity>;
};

export type DocEntityResponseCollection = {
  __typename?: 'DocEntityResponseCollection';
  data: Array<DocEntity>;
  meta: ResponseCollectionMeta;
};

export type DocFilesDynamicZone = ComponentLinkHref | Error;

export type DocFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DocFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<DocFiltersInput>;
  not?: InputMaybe<DocFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DocFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DocInput = {
  category?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<Scalars['DocFilesDynamicZoneInput']>>;
};

export type DocRelationResponseCollection = {
  __typename?: 'DocRelationResponseCollection';
  data: Array<DocEntity>;
};

export enum Enum_Block_Align_Actions {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export enum Enum_Block_Align_Content {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export enum Enum_Block_Type {
  Cover = 'Cover',
  Side = 'Side'
}

export enum Enum_Componentlinktext_Background {
  Black = 'black',
  Blue = 'blue',
  Blue_1 = 'blue_1',
  Blue_2 = 'blue_2',
  Blue_3 = 'blue_3',
  Blue_4 = 'blue_4',
  Blue_5 = 'blue_5',
  Blue_6 = 'blue_6',
  Blue_7 = 'blue_7',
  Blue_8 = 'blue_8',
  Blue_9 = 'blue_9',
  Blue_10 = 'blue_10',
  Brown = 'brown',
  Brown_1 = 'brown_1',
  Brown_2 = 'brown_2',
  Brown_3 = 'brown_3',
  Brown_4 = 'brown_4',
  Brown_5 = 'brown_5',
  Brown_6 = 'brown_6',
  Brown_7 = 'brown_7',
  Brown_8 = 'brown_8',
  Brown_9 = 'brown_9',
  Brown_10 = 'brown_10',
  Brown_11 = 'brown_11',
  Brown_12 = 'brown_12',
  Brown_13 = 'brown_13',
  Brown_14 = 'brown_14',
  Green = 'green',
  Green_1 = 'green_1',
  Green_2 = 'green_2',
  Green_3 = 'green_3',
  Green_4 = 'green_4',
  Green_5 = 'green_5',
  Green_6 = 'green_6',
  Green_7 = 'green_7',
  Green_8 = 'green_8',
  Green_9 = 'green_9',
  Green_10 = 'green_10',
  Grey = 'grey',
  Grey_1 = 'grey_1',
  Grey_2 = 'grey_2',
  Grey_3 = 'grey_3',
  Grey_4 = 'grey_4',
  Grey_5 = 'grey_5',
  Grey_6 = 'grey_6',
  Grey_7 = 'grey_7',
  Grey_8 = 'grey_8',
  Grey_9 = 'grey_9',
  Grey_10 = 'grey_10',
  Grey_11 = 'grey_11',
  Grey_12 = 'grey_12',
  Grey_13 = 'grey_13',
  Grey_14 = 'grey_14',
  Indigo = 'indigo',
  Indigo_1 = 'indigo_1',
  Indigo_2 = 'indigo_2',
  Indigo_3 = 'indigo_3',
  Indigo_4 = 'indigo_4',
  Indigo_5 = 'indigo_5',
  Indigo_6 = 'indigo_6',
  Indigo_7 = 'indigo_7',
  Indigo_8 = 'indigo_8',
  Indigo_9 = 'indigo_9',
  Indigo_10 = 'indigo_10',
  Orange = 'orange',
  Orange_1 = 'orange_1',
  Orange_2 = 'orange_2',
  Orange_3 = 'orange_3',
  Orange_4 = 'orange_4',
  Orange_5 = 'orange_5',
  Orange_6 = 'orange_6',
  Orange_7 = 'orange_7',
  Orange_8 = 'orange_8',
  Orange_9 = 'orange_9',
  Orange_10 = 'orange_10',
  Purple = 'purple',
  Purple_1 = 'purple_1',
  Purple_2 = 'purple_2',
  Purple_3 = 'purple_3',
  Purple_4 = 'purple_4',
  Purple_5 = 'purple_5',
  Purple_6 = 'purple_6',
  Purple_7 = 'purple_7',
  Purple_8 = 'purple_8',
  Purple_9 = 'purple_9',
  Purple_10 = 'purple_10',
  Red = 'red',
  Red_1 = 'red_1',
  Red_2 = 'red_2',
  Red_3 = 'red_3',
  Red_4 = 'red_4',
  Red_5 = 'red_5',
  Red_6 = 'red_6',
  Red_7 = 'red_7',
  Red_8 = 'red_8',
  Red_9 = 'red_9',
  Red_10 = 'red_10',
  Teal = 'teal',
  Teal_1 = 'teal_1',
  Teal_2 = 'teal_2',
  Teal_3 = 'teal_3',
  Teal_4 = 'teal_4',
  Teal_5 = 'teal_5',
  Teal_6 = 'teal_6',
  Teal_7 = 'teal_7',
  Teal_8 = 'teal_8',
  Teal_9 = 'teal_9',
  Teal_10 = 'teal_10',
  Transparent = 'transparent',
  White = 'white'
}

export enum Enum_Componentlinktext_Color {
  Black = 'black',
  Blue = 'blue',
  Blue_1 = 'blue_1',
  Blue_2 = 'blue_2',
  Blue_3 = 'blue_3',
  Blue_4 = 'blue_4',
  Blue_5 = 'blue_5',
  Blue_6 = 'blue_6',
  Blue_7 = 'blue_7',
  Blue_8 = 'blue_8',
  Blue_9 = 'blue_9',
  Blue_10 = 'blue_10',
  Brown = 'brown',
  Brown_1 = 'brown_1',
  Brown_2 = 'brown_2',
  Brown_3 = 'brown_3',
  Brown_4 = 'brown_4',
  Brown_5 = 'brown_5',
  Brown_6 = 'brown_6',
  Brown_7 = 'brown_7',
  Brown_8 = 'brown_8',
  Brown_9 = 'brown_9',
  Brown_10 = 'brown_10',
  Brown_11 = 'brown_11',
  Brown_12 = 'brown_12',
  Brown_13 = 'brown_13',
  Brown_14 = 'brown_14',
  Green = 'green',
  Green_1 = 'green_1',
  Green_2 = 'green_2',
  Green_3 = 'green_3',
  Green_4 = 'green_4',
  Green_5 = 'green_5',
  Green_6 = 'green_6',
  Green_7 = 'green_7',
  Green_8 = 'green_8',
  Green_9 = 'green_9',
  Green_10 = 'green_10',
  Grey = 'grey',
  Grey_1 = 'grey_1',
  Grey_2 = 'grey_2',
  Grey_3 = 'grey_3',
  Grey_4 = 'grey_4',
  Grey_5 = 'grey_5',
  Grey_6 = 'grey_6',
  Grey_7 = 'grey_7',
  Grey_8 = 'grey_8',
  Grey_9 = 'grey_9',
  Grey_10 = 'grey_10',
  Grey_11 = 'grey_11',
  Grey_12 = 'grey_12',
  Grey_13 = 'grey_13',
  Grey_14 = 'grey_14',
  Indigo = 'indigo',
  Indigo_1 = 'indigo_1',
  Indigo_2 = 'indigo_2',
  Indigo_3 = 'indigo_3',
  Indigo_4 = 'indigo_4',
  Indigo_5 = 'indigo_5',
  Indigo_6 = 'indigo_6',
  Indigo_7 = 'indigo_7',
  Indigo_8 = 'indigo_8',
  Indigo_9 = 'indigo_9',
  Indigo_10 = 'indigo_10',
  Orange = 'orange',
  Orange_1 = 'orange_1',
  Orange_2 = 'orange_2',
  Orange_3 = 'orange_3',
  Orange_4 = 'orange_4',
  Orange_5 = 'orange_5',
  Orange_6 = 'orange_6',
  Orange_7 = 'orange_7',
  Orange_8 = 'orange_8',
  Orange_9 = 'orange_9',
  Orange_10 = 'orange_10',
  Purple = 'purple',
  Purple_1 = 'purple_1',
  Purple_2 = 'purple_2',
  Purple_3 = 'purple_3',
  Purple_4 = 'purple_4',
  Purple_5 = 'purple_5',
  Purple_6 = 'purple_6',
  Purple_7 = 'purple_7',
  Purple_8 = 'purple_8',
  Purple_9 = 'purple_9',
  Purple_10 = 'purple_10',
  Red = 'red',
  Red_1 = 'red_1',
  Red_2 = 'red_2',
  Red_3 = 'red_3',
  Red_4 = 'red_4',
  Red_5 = 'red_5',
  Red_6 = 'red_6',
  Red_7 = 'red_7',
  Red_8 = 'red_8',
  Red_9 = 'red_9',
  Red_10 = 'red_10',
  Teal = 'teal',
  Teal_1 = 'teal_1',
  Teal_2 = 'teal_2',
  Teal_3 = 'teal_3',
  Teal_4 = 'teal_4',
  Teal_5 = 'teal_5',
  Teal_6 = 'teal_6',
  Teal_7 = 'teal_7',
  Teal_8 = 'teal_8',
  Teal_9 = 'teal_9',
  Teal_10 = 'teal_10',
  Transparent = 'transparent',
  White = 'white'
}

export enum Enum_Componentpageblog_Tag {
  Agti = 'AGTI',
  News = 'News'
}

export enum Enum_Componentpagebuiltin_Name {
  Documents = 'documents',
  Faq = 'faq',
  Media = 'media'
}

export enum Enum_Post_Type {
  Agti = 'AGTI',
  News = 'News'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type Faq = {
  __typename?: 'Faq';
  answer: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<FaqRelationResponseCollection>;
  question: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type FaqLocalizationsArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FaqEntity = {
  __typename?: 'FaqEntity';
  attributes?: Maybe<Faq>;
  id?: Maybe<Scalars['ID']>;
};

export type FaqEntityResponse = {
  __typename?: 'FaqEntityResponse';
  data?: Maybe<FaqEntity>;
};

export type FaqEntityResponseCollection = {
  __typename?: 'FaqEntityResponseCollection';
  data: Array<FaqEntity>;
  meta: ResponseCollectionMeta;
};

export type FaqFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  enabled?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<FaqFiltersInput>;
  not?: InputMaybe<FaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  question?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FaqInput = {
  answer?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  question?: InputMaybe<Scalars['String']>;
};

export type FaqRelationResponseCollection = {
  __typename?: 'FaqRelationResponseCollection';
  data: Array<FaqEntity>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Footer = {
  __typename?: 'Footer';
  createdAt?: Maybe<Scalars['DateTime']>;
  links?: Maybe<Array<Maybe<FooterLinksDynamicZone>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<FooterRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FooterEntity = {
  __typename?: 'FooterEntity';
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars['ID']>;
};

export type FooterEntityResponse = {
  __typename?: 'FooterEntityResponse';
  data?: Maybe<FooterEntity>;
};

export type FooterInput = {
  links?: InputMaybe<Array<Scalars['FooterLinksDynamicZoneInput']>>;
};

export type FooterLinksDynamicZone = ComponentLinkRoute | ComponentLinkSocial | Error;

export type FooterRelationResponseCollection = {
  __typename?: 'FooterRelationResponseCollection';
  data: Array<FooterEntity>;
};

export type GenericMorph = Block | ComponentLinkHref | ComponentLinkRoute | ComponentLinkSocial | ComponentLinkText | ComponentPageBlog | ComponentPageBuiltIn | ComponentPageContent | ComponentRelBlock | ComponentRelPage | ComponentVideoYouTube | Doc | Faq | Footer | Home | I18NLocale | Lang | Media | Nav | Page | Post | Social | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Home = {
  __typename?: 'Home';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlight?: Maybe<Array<Maybe<ComponentRelBlock>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomeRelationResponseCollection>;
  main?: Maybe<ComponentRelBlock>;
  other?: Maybe<Array<Maybe<ComponentRelBlock>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomeHighlightArgs = {
  filters?: InputMaybe<ComponentRelBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomeOtherArgs = {
  filters?: InputMaybe<ComponentRelBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomeEntity = {
  __typename?: 'HomeEntity';
  attributes?: Maybe<Home>;
  id?: Maybe<Scalars['ID']>;
};

export type HomeEntityResponse = {
  __typename?: 'HomeEntityResponse';
  data?: Maybe<HomeEntity>;
};

export type HomeInput = {
  highlight?: InputMaybe<Array<InputMaybe<ComponentRelBlockInput>>>;
  main?: InputMaybe<ComponentRelBlockInput>;
  other?: InputMaybe<Array<InputMaybe<ComponentRelBlockInput>>>;
};

export type HomeRelationResponseCollection = {
  __typename?: 'HomeRelationResponseCollection';
  data: Array<HomeEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Lang = {
  __typename?: 'Lang';
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  enabled: Scalars['Boolean'];
  order: Scalars['Int'];
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LangEntity = {
  __typename?: 'LangEntity';
  attributes?: Maybe<Lang>;
  id?: Maybe<Scalars['ID']>;
};

export type LangEntityResponse = {
  __typename?: 'LangEntityResponse';
  data?: Maybe<LangEntity>;
};

export type LangEntityResponseCollection = {
  __typename?: 'LangEntityResponseCollection';
  data: Array<LangEntity>;
  meta: ResponseCollectionMeta;
};

export type LangFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LangFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  enabled?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<LangFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LangFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LangInput = {
  code?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
};

export type Media = {
  __typename?: 'Media';
  createdAt?: Maybe<Scalars['DateTime']>;
  enabled: Scalars['Boolean'];
  image: UploadFileEntityResponse;
  link: ComponentLinkHref;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MediaEntity = {
  __typename?: 'MediaEntity';
  attributes?: Maybe<Media>;
  id?: Maybe<Scalars['ID']>;
};

export type MediaEntityResponse = {
  __typename?: 'MediaEntityResponse';
  data?: Maybe<MediaEntity>;
};

export type MediaEntityResponseCollection = {
  __typename?: 'MediaEntityResponseCollection';
  data: Array<MediaEntity>;
  meta: ResponseCollectionMeta;
};

export type MediaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MediaFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  enabled?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<ComponentLinkHrefFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MediaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MediaFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MediaInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<ComponentLinkHrefInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlock?: Maybe<BlockEntityResponse>;
  createBlockLocalization?: Maybe<BlockEntityResponse>;
  createDoc?: Maybe<DocEntityResponse>;
  createDocLocalization?: Maybe<DocEntityResponse>;
  createFaq?: Maybe<FaqEntityResponse>;
  createFaqLocalization?: Maybe<FaqEntityResponse>;
  createFooterLocalization?: Maybe<FooterEntityResponse>;
  createHomeLocalization?: Maybe<HomeEntityResponse>;
  createLang?: Maybe<LangEntityResponse>;
  createMedia?: Maybe<MediaEntityResponse>;
  createNav?: Maybe<NavEntityResponse>;
  createNavLocalization?: Maybe<NavEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createPageLocalization?: Maybe<PageEntityResponse>;
  createPost?: Maybe<PostEntityResponse>;
  createPostLocalization?: Maybe<PostEntityResponse>;
  createSocial?: Maybe<SocialEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteBlock?: Maybe<BlockEntityResponse>;
  deleteDoc?: Maybe<DocEntityResponse>;
  deleteFaq?: Maybe<FaqEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteHome?: Maybe<HomeEntityResponse>;
  deleteLang?: Maybe<LangEntityResponse>;
  deleteMedia?: Maybe<MediaEntityResponse>;
  deleteNav?: Maybe<NavEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deletePost?: Maybe<PostEntityResponse>;
  deleteSocial?: Maybe<SocialEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBlock?: Maybe<BlockEntityResponse>;
  updateDoc?: Maybe<DocEntityResponse>;
  updateFaq?: Maybe<FaqEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateHome?: Maybe<HomeEntityResponse>;
  updateLang?: Maybe<LangEntityResponse>;
  updateMedia?: Maybe<MediaEntityResponse>;
  updateNav?: Maybe<NavEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updatePost?: Maybe<PostEntityResponse>;
  updateSocial?: Maybe<SocialEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateBlockArgs = {
  data: BlockInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBlockLocalizationArgs = {
  data?: InputMaybe<BlockInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateDocArgs = {
  data: DocInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateDocLocalizationArgs = {
  data?: InputMaybe<DocInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateFaqArgs = {
  data: FaqInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateFaqLocalizationArgs = {
  data?: InputMaybe<FaqInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateFooterLocalizationArgs = {
  data?: InputMaybe<FooterInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHomeLocalizationArgs = {
  data?: InputMaybe<HomeInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateLangArgs = {
  data: LangInput;
};


export type MutationCreateMediaArgs = {
  data: MediaInput;
};


export type MutationCreateNavArgs = {
  data: NavInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateNavLocalizationArgs = {
  data?: InputMaybe<NavInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePageArgs = {
  data: PageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePageLocalizationArgs = {
  data?: InputMaybe<PageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePostArgs = {
  data: PostInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePostLocalizationArgs = {
  data?: InputMaybe<PostInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateSocialArgs = {
  data: SocialInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteBlockArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteDocArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteFaqArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteLangArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNavArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePageArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteSocialArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateBlockArgs = {
  data: BlockInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateDocArgs = {
  data: DocInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFaqArgs = {
  data: FaqInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateHomeArgs = {
  data: HomeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateLangArgs = {
  data: LangInput;
  id: Scalars['ID'];
};


export type MutationUpdateMediaArgs = {
  data: MediaInput;
  id: Scalars['ID'];
};


export type MutationUpdateNavArgs = {
  data: NavInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateSocialArgs = {
  data: SocialInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Nav = {
  __typename?: 'Nav';
  builtin?: Maybe<ComponentPageBuiltIn>;
  createdAt?: Maybe<Scalars['DateTime']>;
  custom?: Maybe<ComponentRelPage>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<NavRelationResponseCollection>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NavLocalizationsArgs = {
  filters?: InputMaybe<NavFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavEntity = {
  __typename?: 'NavEntity';
  attributes?: Maybe<Nav>;
  id?: Maybe<Scalars['ID']>;
};

export type NavEntityResponse = {
  __typename?: 'NavEntityResponse';
  data?: Maybe<NavEntity>;
};

export type NavEntityResponseCollection = {
  __typename?: 'NavEntityResponseCollection';
  data: Array<NavEntity>;
  meta: ResponseCollectionMeta;
};

export type NavFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NavFiltersInput>>>;
  builtin?: InputMaybe<ComponentPageBuiltInFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  custom?: InputMaybe<ComponentRelPageFiltersInput>;
  enabled?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<NavFiltersInput>;
  not?: InputMaybe<NavFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NavFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NavInput = {
  builtin?: InputMaybe<ComponentPageBuiltInInput>;
  custom?: InputMaybe<ComponentRelPageInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
};

export type NavRelationResponseCollection = {
  __typename?: 'NavRelationResponseCollection';
  data: Array<NavEntity>;
};

export type Page = {
  __typename?: 'Page';
  blog?: Maybe<ComponentPageBlog>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PageRelationResponseCollection>;
  name: Scalars['String'];
  path: Scalars['String'];
  static?: Maybe<ComponentPageContent>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageEntity = {
  __typename?: 'PageEntity';
  attributes?: Maybe<Page>;
  id?: Maybe<Scalars['ID']>;
};

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse';
  data?: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  blog?: InputMaybe<ComponentPageBlogFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  path?: InputMaybe<StringFilterInput>;
  static?: InputMaybe<ComponentPageContentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  blog?: InputMaybe<ComponentPageBlogInput>;
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  static?: InputMaybe<ComponentPageContentInput>;
};

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  data: Array<PageEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PostRelationResponseCollection>;
  short?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  type: Enum_Post_Type;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PostLocalizationsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PostEntity = {
  __typename?: 'PostEntity';
  attributes?: Maybe<Post>;
  id?: Maybe<Scalars['ID']>;
};

export type PostEntityResponse = {
  __typename?: 'PostEntityResponse';
  data?: Maybe<PostEntity>;
};

export type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  data: Array<PostEntity>;
  meta: ResponseCollectionMeta;
};

export type PostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PostFiltersInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  short?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PostInput = {
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  short?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Post_Type>;
};

export type PostRelationResponseCollection = {
  __typename?: 'PostRelationResponseCollection';
  data: Array<PostEntity>;
};

export type Query = {
  __typename?: 'Query';
  block?: Maybe<BlockEntityResponse>;
  blocks?: Maybe<BlockEntityResponseCollection>;
  doc?: Maybe<DocEntityResponse>;
  docs?: Maybe<DocEntityResponseCollection>;
  faq?: Maybe<FaqEntityResponse>;
  faqs?: Maybe<FaqEntityResponseCollection>;
  footer?: Maybe<FooterEntityResponse>;
  home?: Maybe<HomeEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  lang?: Maybe<LangEntityResponse>;
  langs?: Maybe<LangEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  media?: Maybe<MediaEntityResponse>;
  medias?: Maybe<MediaEntityResponseCollection>;
  nav?: Maybe<NavEntityResponse>;
  navs?: Maybe<NavEntityResponseCollection>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  post?: Maybe<PostEntityResponse>;
  posts?: Maybe<PostEntityResponseCollection>;
  social?: Maybe<SocialEntityResponse>;
  socials?: Maybe<SocialEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryBlockArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryBlocksArgs = {
  filters?: InputMaybe<BlockFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDocArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryDocsArgs = {
  filters?: InputMaybe<DocFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFaqArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryFaqsArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryHomeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLangArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLangsArgs = {
  filters?: InputMaybe<LangFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMediaArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMediasArgs = {
  filters?: InputMaybe<MediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNavArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryNavsArgs = {
  filters?: InputMaybe<NavFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySocialArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySocialsArgs = {
  filters?: InputMaybe<SocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Social = {
  __typename?: 'Social';
  createdAt?: Maybe<Scalars['DateTime']>;
  icon: UploadFileEntityResponse;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type SocialEntity = {
  __typename?: 'SocialEntity';
  attributes?: Maybe<Social>;
  id?: Maybe<Scalars['ID']>;
};

export type SocialEntityResponse = {
  __typename?: 'SocialEntityResponse';
  data?: Maybe<SocialEntity>;
};

export type SocialEntityResponseCollection = {
  __typename?: 'SocialEntityResponseCollection';
  data: Array<SocialEntity>;
  meta: ResponseCollectionMeta;
};

export type SocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SocialFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SocialFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type SocialInput = {
  icon?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};
