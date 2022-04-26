import { Writer, Reader } from "as-proto";
import { cosmos } from "./cosmos/staking/v1beta1/staking";
import { google } from "./google/protobuf/any";
import { cosmos } from "./cosmos/base/v1beta1/coin";
import { google } from "./google/protobuf/timestamp";

export namespace cosmos {
  export namespace staking {
    export namespace v1beta1 {
      export class MsgCreateValidator {
        static encode(message: MsgCreateValidator, writer: Writer): void {
          const description = message.description;
          if (description !== null) {
            writer.uint32(10);
            writer.fork();
            cosmos.staking.v1beta1.Description.encode(description, writer);
            writer.ldelim();
          }

          const commission = message.commission;
          if (commission !== null) {
            writer.uint32(18);
            writer.fork();
            cosmos.staking.v1beta1.CommissionRates.encode(commission, writer);
            writer.ldelim();
          }

          writer.uint32(26);
          writer.string(message.min_self_delegation);

          writer.uint32(34);
          writer.string(message.delegator_address);

          writer.uint32(42);
          writer.string(message.validator_address);

          const pubkey = message.pubkey;
          if (pubkey !== null) {
            writer.uint32(50);
            writer.fork();
            google.protobuf.Any.encode(pubkey, writer);
            writer.ldelim();
          }

          const value = message.value;
          if (value !== null) {
            writer.uint32(58);
            writer.fork();
            cosmos.base.v1beta1.Coin.encode(value, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): MsgCreateValidator {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgCreateValidator();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.description = cosmos.staking.v1beta1.Description.decode(
                  reader,
                  reader.uint32()
                );
                break;

              case 2:
                message.commission =
                  cosmos.staking.v1beta1.CommissionRates.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 3:
                message.min_self_delegation = reader.string();
                break;

              case 4:
                message.delegator_address = reader.string();
                break;

              case 5:
                message.validator_address = reader.string();
                break;

              case 6:
                message.pubkey = google.protobuf.Any.decode(
                  reader,
                  reader.uint32()
                );
                break;

              case 7:
                message.value = cosmos.base.v1beta1.Coin.decode(
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

        description: cosmos.staking.v1beta1.Description | null;
        commission: cosmos.staking.v1beta1.CommissionRates | null;
        min_self_delegation: string;
        delegator_address: string;
        validator_address: string;
        pubkey: google.protobuf.Any | null;
        value: cosmos.base.v1beta1.Coin | null;

        constructor(
          description: cosmos.staking.v1beta1.Description | null = null,
          commission: cosmos.staking.v1beta1.CommissionRates | null = null,
          min_self_delegation: string = "",
          delegator_address: string = "",
          validator_address: string = "",
          pubkey: google.protobuf.Any | null = null,
          value: cosmos.base.v1beta1.Coin | null = null
        ) {
          this.description = description;
          this.commission = commission;
          this.min_self_delegation = min_self_delegation;
          this.delegator_address = delegator_address;
          this.validator_address = validator_address;
          this.pubkey = pubkey;
          this.value = value;
        }
      }

      @unmanaged
      export class MsgCreateValidatorResponse {
        static encode(
          message: MsgCreateValidatorResponse,
          writer: Writer
        ): void {}

        static decode(reader: Reader, length: i32): MsgCreateValidatorResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgCreateValidatorResponse();

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

      export class MsgEditValidator {
        static encode(message: MsgEditValidator, writer: Writer): void {
          const description = message.description;
          if (description !== null) {
            writer.uint32(10);
            writer.fork();
            cosmos.staking.v1beta1.Description.encode(description, writer);
            writer.ldelim();
          }

          writer.uint32(18);
          writer.string(message.validator_address);

          writer.uint32(26);
          writer.string(message.commission_rate);

          writer.uint32(34);
          writer.string(message.min_self_delegation);
        }

        static decode(reader: Reader, length: i32): MsgEditValidator {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgEditValidator();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.description = cosmos.staking.v1beta1.Description.decode(
                  reader,
                  reader.uint32()
                );
                break;

              case 2:
                message.validator_address = reader.string();
                break;

              case 3:
                message.commission_rate = reader.string();
                break;

              case 4:
                message.min_self_delegation = reader.string();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        description: cosmos.staking.v1beta1.Description | null;
        validator_address: string;
        commission_rate: string;
        min_self_delegation: string;

        constructor(
          description: cosmos.staking.v1beta1.Description | null = null,
          validator_address: string = "",
          commission_rate: string = "",
          min_self_delegation: string = ""
        ) {
          this.description = description;
          this.validator_address = validator_address;
          this.commission_rate = commission_rate;
          this.min_self_delegation = min_self_delegation;
        }
      }

      @unmanaged
      export class MsgEditValidatorResponse {
        static encode(
          message: MsgEditValidatorResponse,
          writer: Writer
        ): void {}

        static decode(reader: Reader, length: i32): MsgEditValidatorResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgEditValidatorResponse();

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

      export class MsgDelegate {
        static encode(message: MsgDelegate, writer: Writer): void {
          writer.uint32(10);
          writer.string(message.delegator_address);

          writer.uint32(18);
          writer.string(message.validator_address);

          const amount = message.amount;
          if (amount !== null) {
            writer.uint32(26);
            writer.fork();
            cosmos.base.v1beta1.Coin.encode(amount, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): MsgDelegate {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgDelegate();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.delegator_address = reader.string();
                break;

              case 2:
                message.validator_address = reader.string();
                break;

              case 3:
                message.amount = cosmos.base.v1beta1.Coin.decode(
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

        delegator_address: string;
        validator_address: string;
        amount: cosmos.base.v1beta1.Coin | null;

        constructor(
          delegator_address: string = "",
          validator_address: string = "",
          amount: cosmos.base.v1beta1.Coin | null = null
        ) {
          this.delegator_address = delegator_address;
          this.validator_address = validator_address;
          this.amount = amount;
        }
      }

      @unmanaged
      export class MsgDelegateResponse {
        static encode(message: MsgDelegateResponse, writer: Writer): void {}

        static decode(reader: Reader, length: i32): MsgDelegateResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgDelegateResponse();

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

      export class MsgBeginRedelegate {
        static encode(message: MsgBeginRedelegate, writer: Writer): void {
          writer.uint32(10);
          writer.string(message.delegator_address);

          writer.uint32(18);
          writer.string(message.validator_src_address);

          writer.uint32(26);
          writer.string(message.validator_dst_address);

          const amount = message.amount;
          if (amount !== null) {
            writer.uint32(34);
            writer.fork();
            cosmos.base.v1beta1.Coin.encode(amount, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): MsgBeginRedelegate {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgBeginRedelegate();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.delegator_address = reader.string();
                break;

              case 2:
                message.validator_src_address = reader.string();
                break;

              case 3:
                message.validator_dst_address = reader.string();
                break;

              case 4:
                message.amount = cosmos.base.v1beta1.Coin.decode(
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

        delegator_address: string;
        validator_src_address: string;
        validator_dst_address: string;
        amount: cosmos.base.v1beta1.Coin | null;

        constructor(
          delegator_address: string = "",
          validator_src_address: string = "",
          validator_dst_address: string = "",
          amount: cosmos.base.v1beta1.Coin | null = null
        ) {
          this.delegator_address = delegator_address;
          this.validator_src_address = validator_src_address;
          this.validator_dst_address = validator_dst_address;
          this.amount = amount;
        }
      }

      @unmanaged
      export class MsgBeginRedelegateResponse {
        static encode(
          message: MsgBeginRedelegateResponse,
          writer: Writer
        ): void {
          const completion_time = message.completion_time;
          if (completion_time !== null) {
            writer.uint32(10);
            writer.fork();
            google.protobuf.Timestamp.encode(completion_time, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): MsgBeginRedelegateResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgBeginRedelegateResponse();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.completion_time = google.protobuf.Timestamp.decode(
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

        completion_time: google.protobuf.Timestamp | null;

        constructor(completion_time: google.protobuf.Timestamp | null = null) {
          this.completion_time = completion_time;
        }
      }

      export class MsgUndelegate {
        static encode(message: MsgUndelegate, writer: Writer): void {
          writer.uint32(10);
          writer.string(message.delegator_address);

          writer.uint32(18);
          writer.string(message.validator_address);

          const amount = message.amount;
          if (amount !== null) {
            writer.uint32(26);
            writer.fork();
            cosmos.base.v1beta1.Coin.encode(amount, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): MsgUndelegate {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgUndelegate();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.delegator_address = reader.string();
                break;

              case 2:
                message.validator_address = reader.string();
                break;

              case 3:
                message.amount = cosmos.base.v1beta1.Coin.decode(
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

        delegator_address: string;
        validator_address: string;
        amount: cosmos.base.v1beta1.Coin | null;

        constructor(
          delegator_address: string = "",
          validator_address: string = "",
          amount: cosmos.base.v1beta1.Coin | null = null
        ) {
          this.delegator_address = delegator_address;
          this.validator_address = validator_address;
          this.amount = amount;
        }
      }

      @unmanaged
      export class MsgUndelegateResponse {
        static encode(message: MsgUndelegateResponse, writer: Writer): void {
          const completion_time = message.completion_time;
          if (completion_time !== null) {
            writer.uint32(10);
            writer.fork();
            google.protobuf.Timestamp.encode(completion_time, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): MsgUndelegateResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgUndelegateResponse();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.completion_time = google.protobuf.Timestamp.decode(
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

        completion_time: google.protobuf.Timestamp | null;

        constructor(completion_time: google.protobuf.Timestamp | null = null) {
          this.completion_time = completion_time;
        }
      }
    }
  }
}
