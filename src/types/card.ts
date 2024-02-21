export type ICardParagraphType = {
  identifier: string;
  content: string;
};
export type ICardType = {
  identifier: string;
  img: string;
  header: string;
  paragraphs: ICardParagraphType[];
  btnContent: string;
};
