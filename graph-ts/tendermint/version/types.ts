import { Writer, Reader } from "as-proto";

export namespace tendermint {
  export namespace version {
    export class App {
      static encode(message: App, writer: Writer): void {
        writer.uint32(8);
        writer.uint64(message.protocol);

        writer.uint32(18);
        writer.string(message.software);
      }

      static decode(reader: Reader, length: i32): App {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new App();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.protocol = reader.uint64();
              break;

            case 2:
              message.software = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      protocol: u64;
      software: string;

      constructor(protocol: u64 = 0, software: string = "") {
        this.protocol = protocol;
        this.software = software;
      }
    }

    @unmanaged
    export class Consensus {
      static encode(message: Consensus, writer: Writer): void {
        writer.uint32(8);
        writer.uint64(message.block);

        writer.uint32(16);
        writer.uint64(message.app);
      }

      static decode(reader: Reader, length: i32): Consensus {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new Consensus();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.block = reader.uint64();
              break;

            case 2:
              message.app = reader.uint64();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      block: u64;
      app: u64;

      constructor(block: u64 = 0, app: u64 = 0) {
        this.block = block;
        this.app = app;
      }
    }
  }
}
