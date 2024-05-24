export class Filter {
  id!: number;
  name!: string;
  price!: number;
  tags?: string[];
  favorite: boolean = false;
  imageUrl!: string;
  descriptor!: string;
}
