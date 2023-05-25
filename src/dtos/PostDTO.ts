export interface PostDTO {
  id: number;
  author: {
    avatarURL: string;
    name: string;
    role: string;
  };
  content: PostContent[];
  publishedAt: Date;
}

type PostContent =
  | {
      type: 'paragraph' | 'link';
      content: string;
    }
  | {
      type: 'hashtags';
      content: string[];
    };
