import { Writer, Reader } from "as-proto";
import { tendermint } from "./tendermint/crypto/proof";
import { tendermint as tendermint_2 } from "./tendermint/version/types";
import { google } from "./google/protobuf/timestamp";
import { tendermint as tendermint_2 } from "./tendermint/types/validator";

export namespace tendermint {
  export namespace types {
    export class PartSetHeader {
      static encode(message: PartSetHeader, writer: Writer): void {
        writer.uint32(8);
        writer.uint32(message.total);

        writer.uint32(18);
        writer.bytes(message.hash);
      }

      static decode(reader: Reader, length: i32): PartSetHeader {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new PartSetHeader();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.total = reader.uint32();
              break;

            case 2:
              message.hash = reader.bytes();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      total: u32;
      hash: Uint8Array;

      constructor(total: u32 = 0, hash: Uint8Array = new Uint8Array(0)) {
        this.total = total;
        this.hash = hash;
      }
    }

    export class Part {
      static encode(message: Part, writer: Writer): void {
        writer.uint32(8);
        writer.uint32(message.index);

        writer.uint32(18);
        writer.bytes(message.bytes);

        const proof = message.proof;
        if (proof !== null) {
          writer.uint32(26);
          writer.fork();
          tendermint.crypto.Proof.encode(proof, writer);
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): Part {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new Part();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.index = reader.uint32();
              break;

            case 2:
              message.bytes = reader.bytes();
              break;

            case 3:
              message.proof = tendermint.crypto.Proof.decode(
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

      index: u32;
      bytes: Uint8Array;
      proof: tendermint.crypto.Proof | null;

      constructor(
        index: u32 = 0,
        bytes: Uint8Array = new Uint8Array(0),
        proof: tendermint.crypto.Proof | null = null
      ) {
        this.index = index;
        this.bytes = bytes;
        this.proof = proof;
      }
    }

    export class BlockID {
      static encode(message: BlockID, writer: Writer): void {
        writer.uint32(10);
        writer.bytes(message.hash);

        const part_set_header = message.part_set_header;
        if (part_set_header !== null) {
          writer.uint32(18);
          writer.fork();
          tendermint.types.PartSetHeader.encode(part_set_header, writer);
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): BlockID {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new BlockID();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.hash = reader.bytes();
              break;

            case 2:
              message.part_set_header = tendermint.types.PartSetHeader.decode(
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

      hash: Uint8Array;
      part_set_header: tendermint.types.PartSetHeader | null;

      constructor(
        hash: Uint8Array = new Uint8Array(0),
        part_set_header: tendermint.types.PartSetHeader | null = null
      ) {
        this.hash = hash;
        this.part_set_header = part_set_header;
      }
    }

    export class Header {
      static encode(message: Header, writer: Writer): void {
        const version = message.version;
        if (version !== null) {
          writer.uint32(10);
          writer.fork();
          tendermint_2.version.Consensus.encode(version, writer);
          writer.ldelim();
        }

        writer.uint32(18);
        writer.string(message.chain_id);

        writer.uint32(24);
        writer.int64(message.height);

        const time = message.time;
        if (time !== null) {
          writer.uint32(34);
          writer.fork();
          google.protobuf.Timestamp.encode(time, writer);
          writer.ldelim();
        }

        const last_block_id = message.last_block_id;
        if (last_block_id !== null) {
          writer.uint32(42);
          writer.fork();
          tendermint.types.BlockID.encode(last_block_id, writer);
          writer.ldelim();
        }

        writer.uint32(50);
        writer.bytes(message.last_commit_hash);

        writer.uint32(58);
        writer.bytes(message.data_hash);

        writer.uint32(66);
        writer.bytes(message.validators_hash);

        writer.uint32(74);
        writer.bytes(message.next_validators_hash);

        writer.uint32(82);
        writer.bytes(message.consensus_hash);

        writer.uint32(90);
        writer.bytes(message.app_hash);

        writer.uint32(98);
        writer.bytes(message.last_results_hash);

        writer.uint32(106);
        writer.bytes(message.evidence_hash);

        writer.uint32(114);
        writer.bytes(message.proposer_address);
      }

      static decode(reader: Reader, length: i32): Header {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new Header();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.version = tendermint_2.version.Consensus.decode(
                reader,
                reader.uint32()
              );
              break;

            case 2:
              message.chain_id = reader.string();
              break;

            case 3:
              message.height = reader.int64();
              break;

            case 4:
              message.time = google.protobuf.Timestamp.decode(
                reader,
                reader.uint32()
              );
              break;

            case 5:
              message.last_block_id = tendermint.types.BlockID.decode(
                reader,
                reader.uint32()
              );
              break;

            case 6:
              message.last_commit_hash = reader.bytes();
              break;

            case 7:
              message.data_hash = reader.bytes();
              break;

            case 8:
              message.validators_hash = reader.bytes();
              break;

            case 9:
              message.next_validators_hash = reader.bytes();
              break;

            case 10:
              message.consensus_hash = reader.bytes();
              break;

            case 11:
              message.app_hash = reader.bytes();
              break;

            case 12:
              message.last_results_hash = reader.bytes();
              break;

            case 13:
              message.evidence_hash = reader.bytes();
              break;

            case 14:
              message.proposer_address = reader.bytes();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      version: tendermint_2.version.Consensus | null;
      chain_id: string;
      height: i64;
      time: google.protobuf.Timestamp | null;
      last_block_id: tendermint.types.BlockID | null;
      last_commit_hash: Uint8Array;
      data_hash: Uint8Array;
      validators_hash: Uint8Array;
      next_validators_hash: Uint8Array;
      consensus_hash: Uint8Array;
      app_hash: Uint8Array;
      last_results_hash: Uint8Array;
      evidence_hash: Uint8Array;
      proposer_address: Uint8Array;

      constructor(
        version: tendermint_2.version.Consensus | null = null,
        chain_id: string = "",
        height: i64 = 0,
        time: google.protobuf.Timestamp | null = null,
        last_block_id: tendermint.types.BlockID | null = null,
        last_commit_hash: Uint8Array = new Uint8Array(0),
        data_hash: Uint8Array = new Uint8Array(0),
        validators_hash: Uint8Array = new Uint8Array(0),
        next_validators_hash: Uint8Array = new Uint8Array(0),
        consensus_hash: Uint8Array = new Uint8Array(0),
        app_hash: Uint8Array = new Uint8Array(0),
        last_results_hash: Uint8Array = new Uint8Array(0),
        evidence_hash: Uint8Array = new Uint8Array(0),
        proposer_address: Uint8Array = new Uint8Array(0)
      ) {
        this.version = version;
        this.chain_id = chain_id;
        this.height = height;
        this.time = time;
        this.last_block_id = last_block_id;
        this.last_commit_hash = last_commit_hash;
        this.data_hash = data_hash;
        this.validators_hash = validators_hash;
        this.next_validators_hash = next_validators_hash;
        this.consensus_hash = consensus_hash;
        this.app_hash = app_hash;
        this.last_results_hash = last_results_hash;
        this.evidence_hash = evidence_hash;
        this.proposer_address = proposer_address;
      }
    }

    export class Data {
      static encode(message: Data, writer: Writer): void {
        const txs = message.txs;
        if (txs.length !== 0) {
          for (let i = 0; i < txs.length; ++i) {
            writer.uint32(10);
            writer.bytes(txs[i]);
          }
        }
      }

      static decode(reader: Reader, length: i32): Data {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new Data();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.txs.push(reader.bytes());
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      txs: Array<Uint8Array>;

      constructor(txs: Array<Uint8Array> = []) {
        this.txs = txs;
      }
    }

    export class Vote {
      static encode(message: Vote, writer: Writer): void {
        writer.uint32(8);
        writer.int32(message.type);

        writer.uint32(16);
        writer.int64(message.height);

        writer.uint32(24);
        writer.int32(message.round);

        const block_id = message.block_id;
        if (block_id !== null) {
          writer.uint32(34);
          writer.fork();
          tendermint.types.BlockID.encode(block_id, writer);
          writer.ldelim();
        }

        const timestamp = message.timestamp;
        if (timestamp !== null) {
          writer.uint32(42);
          writer.fork();
          google.protobuf.Timestamp.encode(timestamp, writer);
          writer.ldelim();
        }

        writer.uint32(50);
        writer.bytes(message.validator_address);

        writer.uint32(56);
        writer.int32(message.validator_index);

        writer.uint32(66);
        writer.bytes(message.signature);
      }

      static decode(reader: Reader, length: i32): Vote {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new Vote();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.type = reader.int32();
              break;

            case 2:
              message.height = reader.int64();
              break;

            case 3:
              message.round = reader.int32();
              break;

            case 4:
              message.block_id = tendermint.types.BlockID.decode(
                reader,
                reader.uint32()
              );
              break;

            case 5:
              message.timestamp = google.protobuf.Timestamp.decode(
                reader,
                reader.uint32()
              );
              break;

            case 6:
              message.validator_address = reader.bytes();
              break;

            case 7:
              message.validator_index = reader.int32();
              break;

            case 8:
              message.signature = reader.bytes();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      type: tendermint.types.SignedMsgType;
      height: i64;
      round: i32;
      block_id: tendermint.types.BlockID | null;
      timestamp: google.protobuf.Timestamp | null;
      validator_address: Uint8Array;
      validator_index: i32;
      signature: Uint8Array;

      constructor(
        type: tendermint.types.SignedMsgType = 0,
        height: i64 = 0,
        round: i32 = 0,
        block_id: tendermint.types.BlockID | null = null,
        timestamp: google.protobuf.Timestamp | null = null,
        validator_address: Uint8Array = new Uint8Array(0),
        validator_index: i32 = 0,
        signature: Uint8Array = new Uint8Array(0)
      ) {
        this.type = type;
        this.height = height;
        this.round = round;
        this.block_id = block_id;
        this.timestamp = timestamp;
        this.validator_address = validator_address;
        this.validator_index = validator_index;
        this.signature = signature;
      }
    }

    export class Commit {
      static encode(message: Commit, writer: Writer): void {
        writer.uint32(8);
        writer.int64(message.height);

        writer.uint32(16);
        writer.int32(message.round);

        const block_id = message.block_id;
        if (block_id !== null) {
          writer.uint32(26);
          writer.fork();
          tendermint.types.BlockID.encode(block_id, writer);
          writer.ldelim();
        }

        const signatures = message.signatures;
        for (let i = 0; i < signatures.length; ++i) {
          writer.uint32(34);
          writer.fork();
          tendermint.types.CommitSig.encode(signatures[i], writer);
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): Commit {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new Commit();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.height = reader.int64();
              break;

            case 2:
              message.round = reader.int32();
              break;

            case 3:
              message.block_id = tendermint.types.BlockID.decode(
                reader,
                reader.uint32()
              );
              break;

            case 4:
              message.signatures.push(
                tendermint.types.CommitSig.decode(reader, reader.uint32())
              );
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      height: i64;
      round: i32;
      block_id: tendermint.types.BlockID | null;
      signatures: Array<tendermint.types.CommitSig>;

      constructor(
        height: i64 = 0,
        round: i32 = 0,
        block_id: tendermint.types.BlockID | null = null,
        signatures: Array<tendermint.types.CommitSig> = []
      ) {
        this.height = height;
        this.round = round;
        this.block_id = block_id;
        this.signatures = signatures;
      }
    }

    export class CommitSig {
      static encode(message: CommitSig, writer: Writer): void {
        writer.uint32(8);
        writer.int32(message.block_id_flag);

        writer.uint32(18);
        writer.bytes(message.validator_address);

        const timestamp = message.timestamp;
        if (timestamp !== null) {
          writer.uint32(26);
          writer.fork();
          google.protobuf.Timestamp.encode(timestamp, writer);
          writer.ldelim();
        }

        writer.uint32(34);
        writer.bytes(message.signature);
      }

      static decode(reader: Reader, length: i32): CommitSig {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new CommitSig();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.block_id_flag = reader.int32();
              break;

            case 2:
              message.validator_address = reader.bytes();
              break;

            case 3:
              message.timestamp = google.protobuf.Timestamp.decode(
                reader,
                reader.uint32()
              );
              break;

            case 4:
              message.signature = reader.bytes();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      block_id_flag: tendermint.types.BlockIDFlag;
      validator_address: Uint8Array;
      timestamp: google.protobuf.Timestamp | null;
      signature: Uint8Array;

      constructor(
        block_id_flag: tendermint.types.BlockIDFlag = 0,
        validator_address: Uint8Array = new Uint8Array(0),
        timestamp: google.protobuf.Timestamp | null = null,
        signature: Uint8Array = new Uint8Array(0)
      ) {
        this.block_id_flag = block_id_flag;
        this.validator_address = validator_address;
        this.timestamp = timestamp;
        this.signature = signature;
      }
    }

    export class Proposal {
      static encode(message: Proposal, writer: Writer): void {
        writer.uint32(8);
        writer.int32(message.type);

        writer.uint32(16);
        writer.int64(message.height);

        writer.uint32(24);
        writer.int32(message.round);

        writer.uint32(32);
        writer.int32(message.pol_round);

        const block_id = message.block_id;
        if (block_id !== null) {
          writer.uint32(42);
          writer.fork();
          tendermint.types.BlockID.encode(block_id, writer);
          writer.ldelim();
        }

        const timestamp = message.timestamp;
        if (timestamp !== null) {
          writer.uint32(50);
          writer.fork();
          google.protobuf.Timestamp.encode(timestamp, writer);
          writer.ldelim();
        }

        writer.uint32(58);
        writer.bytes(message.signature);
      }

      static decode(reader: Reader, length: i32): Proposal {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new Proposal();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.type = reader.int32();
              break;

            case 2:
              message.height = reader.int64();
              break;

            case 3:
              message.round = reader.int32();
              break;

            case 4:
              message.pol_round = reader.int32();
              break;

            case 5:
              message.block_id = tendermint.types.BlockID.decode(
                reader,
                reader.uint32()
              );
              break;

            case 6:
              message.timestamp = google.protobuf.Timestamp.decode(
                reader,
                reader.uint32()
              );
              break;

            case 7:
              message.signature = reader.bytes();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      type: tendermint.types.SignedMsgType;
      height: i64;
      round: i32;
      pol_round: i32;
      block_id: tendermint.types.BlockID | null;
      timestamp: google.protobuf.Timestamp | null;
      signature: Uint8Array;

      constructor(
        type: tendermint.types.SignedMsgType = 0,
        height: i64 = 0,
        round: i32 = 0,
        pol_round: i32 = 0,
        block_id: tendermint.types.BlockID | null = null,
        timestamp: google.protobuf.Timestamp | null = null,
        signature: Uint8Array = new Uint8Array(0)
      ) {
        this.type = type;
        this.height = height;
        this.round = round;
        this.pol_round = pol_round;
        this.block_id = block_id;
        this.timestamp = timestamp;
        this.signature = signature;
      }
    }

    export class SignedHeader {
      static encode(message: SignedHeader, writer: Writer): void {
        const header = message.header;
        if (header !== null) {
          writer.uint32(10);
          writer.fork();
          tendermint.types.Header.encode(header, writer);
          writer.ldelim();
        }

        const commit = message.commit;
        if (commit !== null) {
          writer.uint32(18);
          writer.fork();
          tendermint.types.Commit.encode(commit, writer);
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): SignedHeader {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new SignedHeader();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.header = tendermint.types.Header.decode(
                reader,
                reader.uint32()
              );
              break;

            case 2:
              message.commit = tendermint.types.Commit.decode(
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

      header: tendermint.types.Header | null;
      commit: tendermint.types.Commit | null;

      constructor(
        header: tendermint.types.Header | null = null,
        commit: tendermint.types.Commit | null = null
      ) {
        this.header = header;
        this.commit = commit;
      }
    }

    export class LightBlock {
      static encode(message: LightBlock, writer: Writer): void {
        const signed_header = message.signed_header;
        if (signed_header !== null) {
          writer.uint32(10);
          writer.fork();
          tendermint.types.SignedHeader.encode(signed_header, writer);
          writer.ldelim();
        }

        const validator_set = message.validator_set;
        if (validator_set !== null) {
          writer.uint32(18);
          writer.fork();
          tendermint_2.types.ValidatorSet.encode(validator_set, writer);
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): LightBlock {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new LightBlock();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.signed_header = tendermint.types.SignedHeader.decode(
                reader,
                reader.uint32()
              );
              break;

            case 2:
              message.validator_set = tendermint_2.types.ValidatorSet.decode(
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

      signed_header: tendermint.types.SignedHeader | null;
      validator_set: tendermint_2.types.ValidatorSet | null;

      constructor(
        signed_header: tendermint.types.SignedHeader | null = null,
        validator_set: tendermint_2.types.ValidatorSet | null = null
      ) {
        this.signed_header = signed_header;
        this.validator_set = validator_set;
      }
    }

    export class BlockMeta {
      static encode(message: BlockMeta, writer: Writer): void {
        const block_id = message.block_id;
        if (block_id !== null) {
          writer.uint32(10);
          writer.fork();
          tendermint.types.BlockID.encode(block_id, writer);
          writer.ldelim();
        }

        writer.uint32(16);
        writer.int64(message.block_size);

        const header = message.header;
        if (header !== null) {
          writer.uint32(26);
          writer.fork();
          tendermint.types.Header.encode(header, writer);
          writer.ldelim();
        }

        writer.uint32(32);
        writer.int64(message.num_txs);
      }

      static decode(reader: Reader, length: i32): BlockMeta {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new BlockMeta();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.block_id = tendermint.types.BlockID.decode(
                reader,
                reader.uint32()
              );
              break;

            case 2:
              message.block_size = reader.int64();
              break;

            case 3:
              message.header = tendermint.types.Header.decode(
                reader,
                reader.uint32()
              );
              break;

            case 4:
              message.num_txs = reader.int64();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      block_id: tendermint.types.BlockID | null;
      block_size: i64;
      header: tendermint.types.Header | null;
      num_txs: i64;

      constructor(
        block_id: tendermint.types.BlockID | null = null,
        block_size: i64 = 0,
        header: tendermint.types.Header | null = null,
        num_txs: i64 = 0
      ) {
        this.block_id = block_id;
        this.block_size = block_size;
        this.header = header;
        this.num_txs = num_txs;
      }
    }

    export class TxProof {
      static encode(message: TxProof, writer: Writer): void {
        writer.uint32(10);
        writer.bytes(message.root_hash);

        writer.uint32(18);
        writer.bytes(message.data);

        const proof = message.proof;
        if (proof !== null) {
          writer.uint32(26);
          writer.fork();
          tendermint.crypto.Proof.encode(proof, writer);
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): TxProof {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new TxProof();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.root_hash = reader.bytes();
              break;

            case 2:
              message.data = reader.bytes();
              break;

            case 3:
              message.proof = tendermint.crypto.Proof.decode(
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

      root_hash: Uint8Array;
      data: Uint8Array;
      proof: tendermint.crypto.Proof | null;

      constructor(
        root_hash: Uint8Array = new Uint8Array(0),
        data: Uint8Array = new Uint8Array(0),
        proof: tendermint.crypto.Proof | null = null
      ) {
        this.root_hash = root_hash;
        this.data = data;
        this.proof = proof;
      }
    }

    export enum BlockIDFlag {
      BLOCK_ID_FLAG_UNKNOWN = 0,
      BLOCK_ID_FLAG_ABSENT = 1,
      BLOCK_ID_FLAG_COMMIT = 2,
      BLOCK_ID_FLAG_NIL = 3,
    }

    export enum SignedMsgType {
      SIGNED_MSG_TYPE_UNKNOWN = 0,
      SIGNED_MSG_TYPE_PREVOTE = 1,
      SIGNED_MSG_TYPE_PRECOMMIT = 2,
      SIGNED_MSG_TYPE_PROPOSAL = 32,
    }
  }
}
