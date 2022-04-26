import { Writer, Reader } from "as-proto";
import { cosmos } from "./cosmos/authz/v1beta1/authz";
import { google } from "./google/protobuf/any";

export namespace cosmos {
  export namespace authz {
    export namespace v1beta1 {
      export class MsgGrant {
        static encode(message: MsgGrant, writer: Writer): void {
          writer.uint32(10);
          writer.string(message.granter);

          writer.uint32(18);
          writer.string(message.grantee);

          const grant = message.grant;
          if (grant !== null) {
            writer.uint32(26);
            writer.fork();
            cosmos.authz.v1beta1.Grant.encode(grant, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): MsgGrant {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgGrant();

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
                message.grant = cosmos.authz.v1beta1.Grant.decode(
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
        grant: cosmos.authz.v1beta1.Grant | null;

        constructor(
          granter: string = "",
          grantee: string = "",
          grant: cosmos.authz.v1beta1.Grant | null = null
        ) {
          this.granter = granter;
          this.grantee = grantee;
          this.grant = grant;
        }
      }

      export class MsgExecResponse {
        static encode(message: MsgExecResponse, writer: Writer): void {
          const results = message.results;
          if (results.length !== 0) {
            for (let i = 0; i < results.length; ++i) {
              writer.uint32(10);
              writer.bytes(results[i]);
            }
          }
        }

        static decode(reader: Reader, length: i32): MsgExecResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgExecResponse();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.results.push(reader.bytes());
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        results: Array<Uint8Array>;

        constructor(results: Array<Uint8Array> = []) {
          this.results = results;
        }
      }

      export class MsgExec {
        static encode(message: MsgExec, writer: Writer): void {
          writer.uint32(10);
          writer.string(message.grantee);

          const msgs = message.msgs;
          for (let i = 0; i < msgs.length; ++i) {
            writer.uint32(18);
            writer.fork();
            google.protobuf.Any.encode(msgs[i], writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): MsgExec {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgExec();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.grantee = reader.string();
                break;

              case 2:
                message.msgs.push(
                  google.protobuf.Any.decode(reader, reader.uint32())
                );
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        grantee: string;
        msgs: Array<google.protobuf.Any>;

        constructor(
          grantee: string = "",
          msgs: Array<google.protobuf.Any> = []
        ) {
          this.grantee = grantee;
          this.msgs = msgs;
        }
      }

      @unmanaged
      export class MsgGrantResponse {
        static encode(message: MsgGrantResponse, writer: Writer): void {}

        static decode(reader: Reader, length: i32): MsgGrantResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgGrantResponse();

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

      export class MsgRevoke {
        static encode(message: MsgRevoke, writer: Writer): void {
          writer.uint32(10);
          writer.string(message.granter);

          writer.uint32(18);
          writer.string(message.grantee);

          writer.uint32(26);
          writer.string(message.msg_type_url);
        }

        static decode(reader: Reader, length: i32): MsgRevoke {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgRevoke();

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
                message.msg_type_url = reader.string();
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
        msg_type_url: string;

        constructor(
          granter: string = "",
          grantee: string = "",
          msg_type_url: string = ""
        ) {
          this.granter = granter;
          this.grantee = grantee;
          this.msg_type_url = msg_type_url;
        }
      }

      @unmanaged
      export class MsgRevokeResponse {
        static encode(message: MsgRevokeResponse, writer: Writer): void {}

        static decode(reader: Reader, length: i32): MsgRevokeResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgRevokeResponse();

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
