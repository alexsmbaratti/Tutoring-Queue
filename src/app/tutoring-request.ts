export class TutoringRequest {
  constructor(
    public name: string,
    public subject: string,
    public table: string,
    public concept: string,
    public createdTimestamp: Date,
    public helpedTimestamp?: Date
  ) {  }
}
