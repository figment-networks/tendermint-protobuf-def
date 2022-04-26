import { Writer, Reader } from "as-proto";
import { google } from "./google/protobuf/any";
import { cosmos } from "./cosmos/base/v1beta1/coin";
import { cosmos } from "./cosmos/gov/v1beta1/gov";

export namespace cosmos {
  export namespace gov {
    export namespace v1beta1 {
      export class MsgSubmitProposal {
        static encode(message: MsgSubmitProposal, writer: Writer): void {
          const content = message.content;
          if (content !== null) {
            writer.uint32(10);
            writer.fork();
            google.protobuf.Any.encode(content, writer);
            writer.ldelim();
          }

          const initial_deposit = message.initial_deposit;
          for (let i = 0; i < initial_deposit.length; ++i) {
            writer.uint32(18);
            writer.fork();
            cosmos.base.v1beta1.Coin.encode(initial_deposit[i], writer);
            writer.ldelim();
          }

          writer.uint32(26);
          writer.string(message.proposer);
        }

        static decode(reader: Reader, length: i32): MsgSubmitProposal {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgSubmitProposal();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.content = google.protobuf.Any.decode(
                  reader,
                  reader.uint32()
                );
                break;

              case 2:
                message.initial_deposit.push(
                  cosmos.base.v1beta1.Coin.decode(reader, reader.uint32())
                );
                break;

              case 3:
                message.proposer = reader.string();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        content: google.protobuf.Any | null;
        initial_deposit: Array<cosmos.base.v1beta1.Coin>;
        proposer: string;

        constructor(
          content: google.protobuf.Any | null = null,
          initial_deposit: Array<cosmos.base.v1beta1.Coin> = [],
          proposer: string = ""
        ) {
          this.content = content;
          this.initial_deposit = initial_deposit;
          this.proposer = proposer;
        }
      }

      @unmanaged
      export class MsgSubmitProposalResponse {
        static encode(
          message: MsgSubmitProposalResponse,
          writer: Writer
        ): void {
          writer.uint32(8);
          writer.uint64(message.proposal_id);
        }

        static decode(reader: Reader, length: i32): MsgSubmitProposalResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgSubmitProposalResponse();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.proposal_id = reader.uint64();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        proposal_id: u64;

        constructor(proposal_id: u64 = 0) {
          this.proposal_id = proposal_id;
        }
      }

      export class MsgVote {
        static encode(message: MsgVote, writer: Writer): void {
          writer.uint32(8);
          writer.uint64(message.proposal_id);

          writer.uint32(18);
          writer.string(message.voter);

          writer.uint32(24);
          writer.int32(message.option);
        }

        static decode(reader: Reader, length: i32): MsgVote {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgVote();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.proposal_id = reader.uint64();
                break;

              case 2:
                message.voter = reader.string();
                break;

              case 3:
                message.option = reader.int32();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        proposal_id: u64;
        voter: string;
        option: cosmos.gov.v1beta1.VoteOption;

        constructor(
          proposal_id: u64 = 0,
          voter: string = "",
          option: cosmos.gov.v1beta1.VoteOption = 0
        ) {
          this.proposal_id = proposal_id;
          this.voter = voter;
          this.option = option;
        }
      }

      @unmanaged
      export class MsgVoteResponse {
        static encode(message: MsgVoteResponse, writer: Writer): void {}

        static decode(reader: Reader, length: i32): MsgVoteResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgVoteResponse();

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

      export class MsgVoteWeighted {
        static encode(message: MsgVoteWeighted, writer: Writer): void {
          writer.uint32(8);
          writer.uint64(message.proposal_id);

          writer.uint32(18);
          writer.string(message.voter);

          const options = message.options;
          for (let i = 0; i < options.length; ++i) {
            writer.uint32(26);
            writer.fork();
            cosmos.gov.v1beta1.WeightedVoteOption.encode(options[i], writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): MsgVoteWeighted {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgVoteWeighted();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.proposal_id = reader.uint64();
                break;

              case 2:
                message.voter = reader.string();
                break;

              case 3:
                message.options.push(
                  cosmos.gov.v1beta1.WeightedVoteOption.decode(
                    reader,
                    reader.uint32()
                  )
                );
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        proposal_id: u64;
        voter: string;
        options: Array<cosmos.gov.v1beta1.WeightedVoteOption>;

        constructor(
          proposal_id: u64 = 0,
          voter: string = "",
          options: Array<cosmos.gov.v1beta1.WeightedVoteOption> = []
        ) {
          this.proposal_id = proposal_id;
          this.voter = voter;
          this.options = options;
        }
      }

      @unmanaged
      export class MsgVoteWeightedResponse {
        static encode(message: MsgVoteWeightedResponse, writer: Writer): void {}

        static decode(reader: Reader, length: i32): MsgVoteWeightedResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgVoteWeightedResponse();

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

      export class MsgDeposit {
        static encode(message: MsgDeposit, writer: Writer): void {
          writer.uint32(8);
          writer.uint64(message.proposal_id);

          writer.uint32(18);
          writer.string(message.depositor);

          const amount = message.amount;
          for (let i = 0; i < amount.length; ++i) {
            writer.uint32(26);
            writer.fork();
            cosmos.base.v1beta1.Coin.encode(amount[i], writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): MsgDeposit {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgDeposit();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.proposal_id = reader.uint64();
                break;

              case 2:
                message.depositor = reader.string();
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

        proposal_id: u64;
        depositor: string;
        amount: Array<cosmos.base.v1beta1.Coin>;

        constructor(
          proposal_id: u64 = 0,
          depositor: string = "",
          amount: Array<cosmos.base.v1beta1.Coin> = []
        ) {
          this.proposal_id = proposal_id;
          this.depositor = depositor;
          this.amount = amount;
        }
      }

      @unmanaged
      export class MsgDepositResponse {
        static encode(message: MsgDepositResponse, writer: Writer): void {}

        static decode(reader: Reader, length: i32): MsgDepositResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new MsgDepositResponse();

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
