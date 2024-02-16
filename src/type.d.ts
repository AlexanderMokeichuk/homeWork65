export interface PageData {
  id: string
  title: string,
  content: string,
}

export interface Pages {
  [id: string]: PageData,
}