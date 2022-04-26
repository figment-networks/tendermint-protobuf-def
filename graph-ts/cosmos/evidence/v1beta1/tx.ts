import { Writer, Reader } from "as-proto";
import { google } from "./google/protobuf/any";

export namespace cosmos {
  export namespace evidence {
    export namespace v1beta1 {
      export class MsgSubmitEvidence {
        static encode(message: MsgSubmitEvidence, writer: Writer): void {
          writer.uint32(10);
          writer.string(message.submitter);

          const evidence = message.evidence;
          if (evidence !== null) {
            writer.uint32(18);
            writer.fork();
            google.protobuf.Any.encode(evidence, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): MsgSubmitEvidence {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgSubmitEvidence();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.submitter = reader.string();
                break;

              case 2:
                message.evidence = google.protobuf.Any.decode(
                  reader,
                  reader.uint32()
                );
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        submitter: string;
        evidence: google.protobuf.Any | null;

        constructor(
          submitter: string = "",
          evidence: google.protobuf.Any | null = null
        ) {
          this.submitter = submitter;
          this.evidence = evidence;
        }
      }

      export class MsgSubmitEvidenceResponse {
        static encode(
          message: MsgSubmitEvidenceResponse,
          writer: Writer
        ): void {
          writer.uint32(34);
          writer.bytes(message.hash);
        }

        static decode(reader: Reader, length: i32): MsgSubmitEvidenceResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgSubmitEvidenceResponse();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 4:
                message.hash = reader.bytes();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        hash: Uint8Array;

        constructor(hash: Uint8Array = new Uint8Array(0)) {
          this.hash = hash;
        }
      }
    }
  }
}
