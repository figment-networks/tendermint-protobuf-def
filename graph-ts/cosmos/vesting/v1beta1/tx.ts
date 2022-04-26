import { Writer, Reader } from "as-proto";
import { cosmos } from "./cosmos/base/v1beta1/coin";

export namespace cosmos {
  export namespace vesting {
    export namespace v1beta1 {
      export class MsgCreateVestingAccount {
        static encode(message: MsgCreateVestingAccount, writer: Writer): void {
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

          writer.uint32(32);
          writer.int64(message.end_time);

          writer.uint32(40);
          writer.bool(message.delayed);
        }

        static decode(reader: Reader, length: i32): MsgCreateVestingAccount {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgCreateVestingAccount();

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

              case 4:
                message.end_time = reader.int64();
                break;

              case 5:
                message.delayed = reader.bool();
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
        end_time: i64;
        delayed: bool;

        constructor(
          from_address: string = "",
          to_address: string = "",
          amount: Array<cosmos.base.v1beta1.Coin> = [],
          end_time: i64 = 0,
          delayed: bool = false
        ) {
          this.from_address = from_address;
          this.to_address = to_address;
          this.amount = amount;
          this.end_time = end_time;
          this.delayed = delayed;
        }
      }

      @unmanaged
      export class MsgCreateVestingAccountResponse {
        static encode(
          message: MsgCreateVestingAccountResponse,
          writer: Writer
        ): void {}

        static decode(
          reader: Reader,
          length: i32
        ): MsgCreateVestingAccountResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgCreateVestingAccountResponse();

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
