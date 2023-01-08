export class Offers {
    id : number;
    title: string;
    descript: string;
    picture: string;
    constructor(id: number, title: string, descript: string, picture: string)
    {
        this.id = id;
        this.title = title;
        this.descript = descript;
        this.picture = picture;
    }
}
