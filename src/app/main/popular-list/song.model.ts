export class Song {

    public name: string;
    public authorName: string;
    public imgUrl: string;
    public authorUrl: string;

    constructor(name:string, authorName:string, imgUrl:string, authorUrl:string ){
        this.name=name;
        this.authorName=authorName;
        this.imgUrl=imgUrl;
        this.authorUrl=authorUrl;
    }
}