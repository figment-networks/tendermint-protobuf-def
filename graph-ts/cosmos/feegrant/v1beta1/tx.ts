import { Writer, Reader } from "as-proto";
import { google } from "./google/protobuf/any";

export namespace cosmos {
  export namespace feegrant {
    export namespace v1beta1 {
      export class MsgGrantAllowance {
        static encode(message: MsgGrantAllowance, writer: Writer): void {
          writer.uint32(10);
          writer.string(message.granter);

          writer.uint32(18);
          writer.string(message.grantee);

          const allowance = message.allowance;
          if (allowance !== null) {
            writer.uint32(26);
            writer.fork();
            google.protobuf.Any.encode(allowance, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): MsgGrantAllowance {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgGrantAllowance();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.granter = reader.string();
                break;

              case 2:
                message.grantee = reader.string();
                break;

              case 3:
                message.allowance = google.protobuf.Any.decode(
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

        granter: string;
        grantee: string;
        allowance: google.protobuf.Any | null;

        constructor(
          granter: string = "",
          grantee: string = "",
          allowance: google.protobuf.Any | null = null
        ) {
          this.granter = granter;
          this.grantee = grantee;
          this.allowance = allowance;
        }
      }

      @unmanaged
      export class MsgGrantAllowanceResponse {
        static encode(
          message: MsgGrantAllowanceResponse,
          writer: Writer
        ): void {}

        static decode(reader: Reader, length: i32): MsgGrantAllowanceResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgGrantAllowanceResponse();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        constructor() {}
      }

      export class MsgRevokeAllowance {
        static encode(message: MsgRevokeAllowance, writer: Writer): void {
          writer.uint32(10);
          writer.string(message.granter);

          writer.uint32(18);
          writer.string(message.grantee);
        }

        static decode(reader: Reader, length: i32): MsgRevokeAllowance {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgRevokeAllowance();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.granter = reader.string();
                break;

              case 2:
                message.grantee = reader.string();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        granter: string;
        grantee: string;

        constructor(granter: string = "", grantee: string = "") {
          this.granter = granter;
          this.grantee = grantee;
        }
      }

      @unmanaged
      export class MsgRevokeAllowanceResponse {
        static encode(
          message: MsgRevokeAllowanceResponse,
          writer: Writer
        ): void {}

        static decode(reader: Reader, length: i32): MsgRevokeAllowanceResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgRevokeAllowanceResponse();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        constructor() {}
      }
    }
  }
}
