import { Writer, Reader } from "as-proto";
import { cosmos } from "./cosmos/base/v1beta1/coin";
import { cosmos } from "./cosmos/bank/v1beta1/bank";

export namespace cosmos {
  export namespace bank {
    export namespace v1beta1 {
      export class MsgSend {
        static encode(message: MsgSend, writer: Writer): void {
          writer.uint32(10);
          writer.string(message.from_address);

          writer.uint32(18);
          writer.string(message.to_address);

          const amount = message.amount;
          for (let i = 0; i < amount.length; ++i) {
            writer.uint32(26);
            writer.fork();
            cosmos.base.v1beta1.Coin.encode(amount[i], writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): MsgSend {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgSend();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.from_address = reader.string();
                break;

              case 2:
                message.to_address = reader.string();
                break;

              case 3:
                message.amount.push(
                  cosmos.base.v1beta1.Coin.decode(reader, reader.uint32())
                );
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        from_address: string;
        to_address: string;
        amount: Array<cosmos.base.v1beta1.Coin>;

        constructor(
          from_address: string = "",
          to_address: string = "",
          amount: Array<cosmos.base.v1beta1.Coin> = []
        ) {
          this.from_address = from_address;
          this.to_address = to_address;
          this.amount = amount;
        }
      }

      @unmanaged
      export class MsgSendResponse {
        static encode(message: MsgSendResponse, writer: Writer): void {}

        static decode(reader: Reader, length: i32): MsgSendResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgSendResponse();

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

      export class MsgMultiSend {
        static encode(message: MsgMultiSend, writer: Writer): void {
          const inputs = message.inputs;
          for (let i = 0; i < inputs.length; ++i) {
            writer.uint32(10);
            writer.fork();
            cosmos.bank.v1beta1.Input.encode(inputs[i], writer);
            writer.ldelim();
          }

          const outputs = message.outputs;
          for (let i = 0; i < outputs.length; ++i) {
            writer.uint32(18);
            writer.fork();
            cosmos.bank.v1beta1.Output.encode(outputs[i], writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): MsgMultiSend {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgMultiSend();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.inputs.push(
                  cosmos.bank.v1beta1.Input.decode(reader, reader.uint32())
                );
                break;

              case 2:
                message.outputs.push(
                  cosmos.bank.v1beta1.Output.decode(reader, reader.uint32())
                );
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        inputs: Array<cosmos.bank.v1beta1.Input>;
        outputs: Array<cosmos.bank.v1beta1.Output>;

        constructor(
          inputs: Array<cosmos.bank.v1beta1.Input> = [],
          outputs: Array<cosmos.bank.v1beta1.Output> = []
        ) {
          this.inputs = inputs;
          this.outputs = outputs;
        }
      }

      @unmanaged
      export class MsgMultiSendResponse {
        static encode(message: MsgMultiSendResponse, writer: Writer): void {}

        static decode(reader: Reader, length: i32): MsgMultiSendResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgMultiSendResponse();

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
