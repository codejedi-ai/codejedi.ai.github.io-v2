export interface YearGroup {
  year: string;
  positions: Position[];
}


export interface Position {
  emoji: string | null,
  title: string,
  company: string,
  location: string,
  date: string,
  link: string,
  isLeft: boolean
}
export interface NotionJob {
    jobTitle: string;
    // startdate and end date
    startDate: string | null;
    endDate: string | null;
    emoji: string | null;
    company: string;
    // bullet points make a list of string
    //bulletPoints: string[];
  }

  // Base interfaces
interface NotionUser {
  object: 'user';
  id: string;
}

interface NotionIcon {
  type: 'emoji';
  emoji: string;
}

interface NotionParent {
  type: 'database_id';
  database_id: string;
}

// Property types
interface NotionDate {
  start: string;
  end: string | null;
  time_zone: string | null;
}

interface NotionTextContent {
  content: string;
  link: null | string;
}

interface NotionAnnotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

interface NotionRichTextElement {
  type: 'text';
  text: NotionTextContent;
  annotations: NotionAnnotations;
  plain_text: string;
  href: null | string;
}

// Property containers
interface NotionDateProperty {
  id: string;
  type: 'date';
  date: NotionDate;
}

interface NotionRichTextProperty {
  id: string;
  type: 'rich_text';
  rich_text: NotionRichTextElement[];
}

interface NotionTitleProperty {
  id: string;
  type: 'title';
  title: NotionRichTextElement[];
}

// Properties object
interface NotionProperties {
  Tenure: NotionDateProperty;
  'Company Name': NotionRichTextProperty;
  'Job Title': NotionTitleProperty;
}

// Page object
interface NotionCoverExternal {
  type: "external";
  external: { url: string; };
}

interface NotionCoverFile {
  type: "file";
  file: { 
    url: string; 
    expiry_time: string; 
  };
}

export interface NotionPage {
  object: 'page';
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: NotionUser;
  last_edited_by: NotionUser;
  cover: NotionCoverExternal | NotionCoverFile | null;
  icon: NotionIcon | null;
  parent: NotionParent;
  archived: boolean;
  properties: NotionProperties;
  url: string;
}

// Root response
export interface NotionDatabaseResponse {
  object: 'list';
  results: NotionPage[];
  next_cursor: null | string;
  has_more: boolean;
  type: 'page_or_database';
  page_or_database: Record<string, never>;
  request_id: string;
}
