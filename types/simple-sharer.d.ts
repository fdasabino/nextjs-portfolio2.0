declare module "simple-sharer" {
    export class Simplesharer {
        url: string;
        title: string;
        text: string;
        hashtags: string[];

        facebook(): void;
        twitter(): void;
        whatsapp(): void;
        linkedin(): void;
        copy(): void;
    }
}
