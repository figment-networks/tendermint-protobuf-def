import { Writer, Reader } from "as-proto";
import { cosmos } from "./cosmos/base/v1beta1/coin";

export namespace cosmos {
  export namespace distribution {
    export namespace v1beta1 {
      export class MsgSetWithdrawAddress {
        static encode(message: MsgSetWithdrawAddress, writer: Writer): void {
          writer.uint32(10);
          writer.string(message.delegator_address);

          writer.uint32(18);
          writer.string(message.withdraw_address);
        }

        static decode(reader: Reader, length: i32): MsgSetWithdrawAddress {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgSetWithdrawAddress();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.delegator_address = reader.string();
                break;

              case 2:
                message.withdraw_address = reader.string();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        delegator_address: string;
        withdraw_address: string;

        constructor(
          delegator_address: string = "",
          withdraw_address: string = ""
        ) {
          this.delegator_address = delegator_address;
          this.withdraw_address = withdraw_address;
        }
      }

      @unmanaged
      export class MsgSetWithdrawAddressResponse {
        static encode(
          message: MsgSetWithdrawAddressResponse,
          writer: Writer
        ): void {}

        static decode(
          reader: Reader,
          length: i32
        ): MsgSetWithdrawAddressResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgSetWithdrawAddressResponse();

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

      export class MsgWithdrawDelegatorReward {
        static encode(
          message: MsgWithdrawDelegatorReward,
          writer: Writer
        ): void {
          writer.uint32(10);
          writer.string(message.delegator_address);

          writer.uint32(18);
          writer.string(message.validator_address);
        }

        static decode(reader: Reader, length: i32): MsgWithdrawDelegatorReward {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgWithdrawDelegatorReward();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.delegator_address = reader.string();
                break;

              case 2:
                message.validator_address = reader.string();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        delegator_address: string;
        validator_address: string;

        constructor(
          delegator_address: string = "",
          validator_address: string = ""
        ) {
          this.delegator_address = delegator_address;
          this.validator_address = validator_address;
        }
      }

      @unmanaged
      export class MsgWithdrawDelegatorRewardResponse {
        static encode(
          message: MsgWithdrawDelegatorRewardResponse,
          writer: Writer
        ): void {}

        static decode(
          reader: Reader,
          length: i32
        ): MsgWithdrawDelegatorRewardResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgWithdrawDelegatorRewardResponse();

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

      export class MsgWithdrawValidatorCommission {
        static encode(
          message: MsgWithdrawValidatorCommission,
          writer: Writer
        ): void {
          writer.uint32(10);
          writer.string(message.validator_address);
        }

        static decode(
          reader: Reader,
          length: i32
        ): MsgWithdrawValidatorCommission {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgWithdrawValidatorCommission();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.validator_address = reader.string();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        validator_address: string;

        constructor(validator_address: string = "") {
          this.validator_address = validator_address;
        }
      }

      @unmanaged
      export class MsgWithdrawValidatorCommissionResponse {
        static encode(
          message: MsgWithdrawValidatorCommissionResponse,
          writer: Writer
        ): void {}

        static decode(
          reader: Reader,
          length: i32
        ): MsgWithdrawValidatorCommissionResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgWithdrawValidatorCommissionResponse();

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

      export class MsgFundCommunityPool {
        static encode(message: MsgFundCommunityPool, writer: Writer): void {
          const amount = message.amount;
          for (let i = 0; i < amount.length; ++i) {
            writer.uint32(10);
            writer.fork();
            cosmos.base.v1beta1.Coin.encode(amount[i], writer);
            writer.ldelim();
          }

          writer.uint32(18);
          writer.string(message.depositor);
        }

        static decode(reader: Reader, length: i32): MsgFundCommunityPool {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgFundCommunityPool();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.amount.push(
                  cosmos.base.v1beta1.Coin.decode(reader, reader.uint32())
                );
                break;

              case 2:
                message.depositor = reader.string();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        amount: Array<cosmos.base.v1beta1.Coin>;
        depositor: string;

        constructor(
          amount: Array<cosmos.base.v1beta1.Coin> = [],
          depositor: string = ""
        ) {
          this.amount = amount;
          this.depositor = depositor;
        }
      }

      @unmanaged
      export class MsgFundCommunityPoolResponse {
        static encode(
          message: MsgFundCommunityPoolResponse,
          writer: Writer
        ): void {}

        static decode(
          reader: Reader,
          length: i32
        ): MsgFundCommunityPoolResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgFundCommunityPoolResponse();

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
