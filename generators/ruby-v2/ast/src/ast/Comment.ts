import { AstNode } from "./core/AstNode";
import { Writer } from "./core/Writer";

export declare namespace Comment {
    interface Args {
        docs?: string;
    }
}

export class Comment extends AstNode {
    public readonly docs: string | undefined;

    constructor({ docs }: Comment.Args) {
        super();
        this.docs = docs;
    }

    public write(writer: Writer): void {
        if (this.docs != null) {
            this.docs.split("\n").forEach((line) => {
                writer.writeLine(`# ${line}`);
            });
        }
    }
}
