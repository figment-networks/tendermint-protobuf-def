import { Writer, Reader } from "as-proto";
import { google } from "./google/protobuf/timestamp";
import { tendermint as tendermint_2 } from "./tendermint/types/types";
import { tendermint as tendermint_2 } from "./tendermint/crypto/proof";
import { tendermint as tendermint_2 } from "./tendermint/types/params";
import { tendermint as tendermint_2 } from "./tendermint/crypto/keys";

export namespace tendermint {
  export namespace abci {
    export class Request {
      static encode(message: Request, writer: Writer): void {
        const echo = message.echo;
        if (echo !== null) {
          writer.uint32(10);
          writer.fork();
          tendermint.abci.RequestEcho.encode(echo, writer);
          writer.ldelim();
        }

        const flush = message.flush;
        if (flush !== null) {
          writer.uint32(18);
          writer.fork();
          tendermint.abci.RequestFlush.encode(flush, writer);
          writer.ldelim();
        }

        const info = message.info;
        if (info !== null) {
          writer.uint32(26);
          writer.fork();
          tendermint.abci.RequestInfo.encode(info, writer);
          writer.ldelim();
        }

        const set_option = message.set_option;
        if (set_option !== null) {
          writer.uint32(34);
          writer.fork();
          tendermint.abci.RequestSetOption.encode(set_option, writer);
          writer.ldelim();
        }

        const init_chain = message.init_chain;
        if (init_chain !== null) {
          writer.uint32(42);
          writer.fork();
          tendermint.abci.RequestInitChain.encode(init_chain, writer);
          writer.ldelim();
        }

        const query = message.query;
        if (query !== null) {
          writer.uint32(50);
          writer.fork();
          tendermint.abci.RequestQuery.encode(query, writer);
          writer.ldelim();
        }

        const begin_block = message.begin_block;
        if (begin_block !== null) {
          writer.uint32(58);
          writer.fork();
          tendermint.abci.RequestBeginBlock.encode(begin_block, writer);
          writer.ldelim();
        }

        const check_tx = message.check_tx;
        if (check_tx !== null) {
          writer.uint32(66);
          writer.fork();
          tendermint.abci.RequestCheckTx.encode(check_tx, writer);
          writer.ldelim();
        }

        const deliver_tx = message.deliver_tx;
        if (deliver_tx !== null) {
          writer.uint32(74);
          writer.fork();
          tendermint.abci.RequestDeliverTx.encode(deliver_tx, writer);
          writer.ldelim();
        }

        const end_block = message.end_block;
        if (end_block !== null) {
          writer.uint32(82);
          writer.fork();
          tendermint.abci.RequestEndBlock.encode(end_block, writer);
          writer.ldelim();
        }

        const commit = message.commit;
        if (commit !== null) {
          writer.uint32(90);
          writer.fork();
          tendermint.abci.RequestCommit.encode(commit, writer);
          writer.ldelim();
        }

        const list_snapshots = message.list_snapshots;
        if (list_snapshots !== null) {
          writer.uint32(98);
          writer.fork();
          tendermint.abci.RequestListSnapshots.encode(list_snapshots, writer);
          writer.ldelim();
        }

        const offer_snapshot = message.offer_snapshot;
        if (offer_snapshot !== null) {
          writer.uint32(106);
          writer.fork();
          tendermint.abci.RequestOfferSnapshot.encode(offer_snapshot, writer);
          writer.ldelim();
        }

        const load_snapshot_chunk = message.load_snapshot_chunk;
        if (load_snapshot_chunk !== null) {
          writer.uint32(114);
          writer.fork();
          tendermint.abci.RequestLoadSnapshotChunk.encode(
            load_snapshot_chunk,
            writer
          );
          writer.ldelim();
        }

        const apply_snapshot_chunk = message.apply_snapshot_chunk;
        if (apply_snapshot_chunk !== null) {
          writer.uint32(122);
          writer.fork();
          tendermint.abci.RequestApplySnapshotChunk.encode(
            apply_snapshot_chunk,
            writer
          );
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): Request {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new Request();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.echo = tendermint.abci.RequestEcho.decode(
                reader,
                reader.uint32()
              );
              break;

            case 2:
              message.flush = tendermint.abci.RequestFlush.decode(
                reader,
                reader.uint32()
              );
              break;

            case 3:
              message.info = tendermint.abci.RequestInfo.decode(
                reader,
                reader.uint32()
              );
              break;

            case 4:
              message.set_option = tendermint.abci.RequestSetOption.decode(
                reader,
                reader.uint32()
              );
              break;

            case 5:
              message.init_chain = tendermint.abci.RequestInitChain.decode(
                reader,
                reader.uint32()
              );
              break;

            case 6:
              message.query = tendermint.abci.RequestQuery.decode(
                reader,
                reader.uint32()
              );
              break;

            case 7:
              message.begin_block = tendermint.abci.RequestBeginBlock.decode(
                reader,
                reader.uint32()
              );
              break;

            case 8:
              message.check_tx = tendermint.abci.RequestCheckTx.decode(
                reader,
                reader.uint32()
              );
              break;

            case 9:
              message.deliver_tx = tendermint.abci.RequestDeliverTx.decode(
                reader,
                reader.uint32()
              );
              break;

            case 10:
              message.end_block = tendermint.abci.RequestEndBlock.decode(
                reader,
                reader.uint32()
              );
              break;

            case 11:
              message.commit = tendermint.abci.RequestCommit.decode(
                reader,
                reader.uint32()
              );
              break;

            case 12:
              message.list_snapshots =
                tendermint.abci.RequestListSnapshots.decode(
                  reader,
                  reader.uint32()
                );
              break;

            case 13:
              message.offer_snapshot =
                tendermint.abci.RequestOfferSnapshot.decode(
                  reader,
                  reader.uint32()
                );
              break;

            case 14:
              message.load_snapshot_chunk =
                tendermint.abci.RequestLoadSnapshotChunk.decode(
                  reader,
                  reader.uint32()
                );
              break;

            case 15:
              message.apply_snapshot_chunk =
                tendermint.abci.RequestApplySnapshotChunk.decode(
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

      echo: tendermint.abci.RequestEcho | null;
      flush: tendermint.abci.RequestFlush | null;
      info: tendermint.abci.RequestInfo | null;
      set_option: tendermint.abci.RequestSetOption | null;
      init_chain: tendermint.abci.RequestInitChain | null;
      query: tendermint.abci.RequestQuery | null;
      begin_block: tendermint.abci.RequestBeginBlock | null;
      check_tx: tendermint.abci.RequestCheckTx | null;
      deliver_tx: tendermint.abci.RequestDeliverTx | null;
      end_block: tendermint.abci.RequestEndBlock | null;
      commit: tendermint.abci.RequestCommit | null;
      list_snapshots: tendermint.abci.RequestListSnapshots | null;
      offer_snapshot: tendermint.abci.RequestOfferSnapshot | null;
      load_snapshot_chunk: tendermint.abci.RequestLoadSnapshotChunk | null;
      apply_snapshot_chunk: tendermint.abci.RequestApplySnapshotChunk | null;

      constructor(
        echo: tendermint.abci.RequestEcho | null = null,
        flush: tendermint.abci.RequestFlush | null = null,
        info: tendermint.abci.RequestInfo | null = null,
        set_option: tendermint.abci.RequestSetOption | null = null,
        init_chain: tendermint.abci.RequestInitChain | null = null,
        query: tendermint.abci.RequestQuery | null = null,
        begin_block: tendermint.abci.RequestBeginBlock | null = null,
        check_tx: tendermint.abci.RequestCheckTx | null = null,
        deliver_tx: tendermint.abci.RequestDeliverTx | null = null,
        end_block: tendermint.abci.RequestEndBlock | null = null,
        commit: tendermint.abci.RequestCommit | null = null,
        list_snapshots: tendermint.abci.RequestListSnapshots | null = null,
        offer_snapshot: tendermint.abci.RequestOfferSnapshot | null = null,
        load_snapshot_chunk: tendermint.abci.RequestLoadSnapshotChunk | null = null,
        apply_snapshot_chunk: tendermint.abci.RequestApplySnapshotChunk | null = null
      ) {
        this.echo = echo;
        this.flush = flush;
        this.info = info;
        this.set_option = set_option;
        this.init_chain = init_chain;
        this.query = query;
        this.begin_block = begin_block;
        this.check_tx = check_tx;
        this.deliver_tx = deliver_tx;
        this.end_block = end_block;
        this.commit = commit;
        this.list_snapshots = list_snapshots;
        this.offer_snapshot = offer_snapshot;
        this.load_snapshot_chunk = load_snapshot_chunk;
        this.apply_snapshot_chunk = apply_snapshot_chunk;
      }
    }

    export class RequestEcho {
      static encode(message: RequestEcho, writer: Writer): void {
        writer.uint32(10);
        writer.string(message.message);
      }

      static decode(reader: Reader, length: i32): RequestEcho {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new RequestEcho();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.message = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      message: string;

      constructor(message: string = "") {
        this.message = message;
      }
    }

    @unmanaged
    export class RequestFlush {
      static encode(message: RequestFlush, writer: Writer): void {}

      static decode(reader: Reader, length: i32): RequestFlush {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new RequestFlush();

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

    export class RequestInfo {
      static encode(message: RequestInfo, writer: Writer): void {
        writer.uint32(10);
        writer.string(message.version);

        writer.uint32(16);
        writer.uint64(message.block_version);

        writer.uint32(24);
        writer.uint64(message.p2p_version);
      }

      static decode(reader: Reader, length: i32): RequestInfo {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new RequestInfo();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.version = reader.string();
              break;

            case 2:
              message.block_version = reader.uint64();
              break;

            case 3:
              message.p2p_version = reader.uint64();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      version: string;
      block_version: u64;
      p2p_version: u64;

      constructor(
        version: string = "",
        block_version: u64 = 0,
        p2p_version: u64 = 0
      ) {
        this.version = version;
        this.block_version = block_version;
        this.p2p_version = p2p_version;
      }
    }

    export class RequestSetOption {
      static encode(message: RequestSetOption, writer: Writer): void {
        writer.uint32(10);
        writer.string(message.key);

        writer.uint32(18);
        writer.string(message.value);
      }

      static decode(reader: Reader, length: i32): RequestSetOption {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new RequestSetOption();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.key = reader.string();
              break;

            case 2:
              message.value = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      key: string;
      value: string;

      constructor(key: string = "", value: string = "") {
        this.key = key;
        this.value = value;
      }
    }

    export class RequestInitChain {
      static encode(message: RequestInitChain, writer: Writer): void {
        const time = message.time;
        if (time !== null) {
          writer.uint32(10);
          writer.fork();
          google.protobuf.Timestamp.encode(time, writer);
          writer.ldelim();
        }

        writer.uint32(18);
        writer.string(message.chain_id);

        const consensus_params = message.consensus_params;
        if (consensus_params !== null) {
          writer.uint32(26);
          writer.fork();
          tendermint.abci.ConsensusParams.encode(consensus_params, writer);
          writer.ldelim();
        }

        const validators = message.validators;
        for (let i = 0; i < validators.length; ++i) {
          writer.uint32(34);
          writer.fork();
          tendermint.abci.ValidatorUpdate.encode(validators[i], writer);
          writer.ldelim();
        }

        writer.uint32(42);
        writer.bytes(message.app_state_bytes);

        writer.uint32(48);
        writer.int64(message.initial_height);
      }

      static decode(reader: Reader, length: i32): RequestInitChain {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new RequestInitChain();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.time = google.protobuf.Timestamp.decode(
                reader,
                reader.uint32()
              );
              break;

            case 2:
              message.chain_id = reader.string();
              break;

            case 3:
              message.consensus_params = tendermint.abci.ConsensusParams.decode(
                reader,
                reader.uint32()
              );
              break;

            case 4:
              message.validators.push(
                tendermint.abci.ValidatorUpdate.decode(reader, reader.uint32())
              );
              break;

            case 5:
              message.app_state_bytes = reader.bytes();
              break;

            case 6:
              message.initial_height = reader.int64();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      time: google.protobuf.Timestamp | null;
      chain_id: string;
      consensus_params: tendermint.abci.ConsensusParams | null;
      validators: Array<tendermint.abci.ValidatorUpdate>;
      app_state_bytes: Uint8Array;
      initial_height: i64;

      constructor(
        time: google.protobuf.Timestamp | null = null,
        chain_id: string = "",
        consensus_params: tendermint.abci.ConsensusParams | null = null,
        validators: Array<tendermint.abci.ValidatorUpdate> = [],
        app_state_bytes: Uint8Array = new Uint8Array(0),
        initial_height: i64 = 0
      ) {
        this.time = time;
        this.chain_id = chain_id;
        this.consensus_params = consensus_params;
        this.validators = validators;
        this.app_state_bytes = app_state_bytes;
        this.initial_height = initial_height;
      }
    }

    export class RequestQuery {
      static encode(message: RequestQuery, writer: Writer): void {
        writer.uint32(10);
        writer.bytes(message.data);

        writer.uint32(18);
        writer.string(message.path);

        writer.uint32(24);
        writer.int64(message.height);

        writer.uint32(32);
        writer.bool(message.prove);
      }

      static decode(reader: Reader, length: i32): RequestQuery {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new RequestQuery();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.data = reader.bytes();
              break;

            case 2:
              message.path = reader.string();
              break;

            case 3:
              message.height = reader.int64();
              break;

            case 4:
              message.prove = reader.bool();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      data: Uint8Array;
      path: string;
      height: i64;
      prove: bool;

      constructor(
        data: Uint8Array = new Uint8Array(0),
        path: string = "",
        height: i64 = 0,
        prove: bool = false
      ) {
        this.data = data;
        this.path = path;
        this.height = height;
        this.prove = prove;
      }
    }

    export class RequestBeginBlock {
      static encode(message: RequestBeginBlock, writer: Writer): void {
        writer.uint32(10);
        writer.bytes(message.hash);

        const header = message.header;
        if (header !== null) {
          writer.uint32(18);
          writer.fork();
          tendermint_2.types.Header.encode(header, writer);
          writer.ldelim();
        }

        const last_commit_info = message.last_commit_info;
        if (last_commit_info !== null) {
          writer.uint32(26);
          writer.fork();
          tendermint.abci.LastCommitInfo.encode(last_commit_info, writer);
          writer.ldelim();
        }

        const byzantine_validators = message.byzantine_validators;
        for (let i = 0; i < byzantine_validators.length; ++i) {
          writer.uint32(34);
          writer.fork();
          tendermint.abci.Evidence.encode(byzantine_validators[i], writer);
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): RequestBeginBlock {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new RequestBeginBlock();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.hash = reader.bytes();
              break;

            case 2:
              message.header = tendermint_2.types.Header.decode(
                reader,
                reader.uint32()
              );
              break;

            case 3:
              message.last_commit_info = tendermint.abci.LastCommitInfo.decode(
                reader,
                reader.uint32()
              );
              break;

            case 4:
              message.byzantine_validators.push(
                tendermint.abci.Evidence.decode(reader, reader.uint32())
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
      header: tendermint_2.types.Header | null;
      last_commit_info: tendermint.abci.LastCommitInfo | null;
      byzantine_validators: Array<tendermint.abci.Evidence>;

      constructor(
        hash: Uint8Array = new Uint8Array(0),
        header: tendermint_2.types.Header | null = null,
        last_commit_info: tendermint.abci.LastCommitInfo | null = null,
        byzantine_validators: Array<tendermint.abci.Evidence> = []
      ) {
        this.hash = hash;
        this.header = header;
        this.last_commit_info = last_commit_info;
        this.byzantine_validators = byzantine_validators;
      }
    }

    export class RequestCheckTx {
      static encode(message: RequestCheckTx, writer: Writer): void {
        writer.uint32(10);
        writer.bytes(message.tx);

        writer.uint32(16);
        writer.int32(message.type);
      }

      static decode(reader: Reader, length: i32): RequestCheckTx {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new RequestCheckTx();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.tx = reader.bytes();
              break;

            case 2:
              message.type = reader.int32();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      tx: Uint8Array;
      type: tendermint.abci.CheckTxType;

      constructor(
        tx: Uint8Array = new Uint8Array(0),
        type: tendermint.abci.CheckTxType = 0
      ) {
        this.tx = tx;
        this.type = type;
      }
    }

    export class RequestDeliverTx {
      static encode(message: RequestDeliverTx, writer: Writer): void {
        writer.uint32(10);
        writer.bytes(message.tx);
      }

      static decode(reader: Reader, length: i32): RequestDeliverTx {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new RequestDeliverTx();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.tx = reader.bytes();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      tx: Uint8Array;

      constructor(tx: Uint8Array = new Uint8Array(0)) {
        this.tx = tx;
      }
    }

    @unmanaged
    export class RequestEndBlock {
      static encode(message: RequestEndBlock, writer: Writer): void {
        writer.uint32(8);
        writer.int64(message.height);
      }

      static decode(reader: Reader, length: i32): RequestEndBlock {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new RequestEndBlock();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.height = reader.int64();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      height: i64;

      constructor(height: i64 = 0) {
        this.height = height;
      }
    }

    @unmanaged
    export class RequestCommit {
      static encode(message: RequestCommit, writer: Writer): void {}

      static decode(reader: Reader, length: i32): RequestCommit {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new RequestCommit();

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

    @unmanaged
    export class RequestListSnapshots {
      static encode(message: RequestListSnapshots, writer: Writer): void {}

      static decode(reader: Reader, length: i32): RequestListSnapshots {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new RequestListSnapshots();

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

    export class RequestOfferSnapshot {
      static encode(message: RequestOfferSnapshot, writer: Writer): void {
        const snapshot = message.snapshot;
        if (snapshot !== null) {
          writer.uint32(10);
          writer.fork();
          tendermint.abci.Snapshot.encode(snapshot, writer);
          writer.ldelim();
        }

        writer.uint32(18);
        writer.bytes(message.app_hash);
      }

      static decode(reader: Reader, length: i32): RequestOfferSnapshot {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new RequestOfferSnapshot();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.snapshot = tendermint.abci.Snapshot.decode(
                reader,
                reader.uint32()
              );
              break;

            case 2:
              message.app_hash = reader.bytes();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      snapshot: tendermint.abci.Snapshot | null;
      app_hash: Uint8Array;

      constructor(
        snapshot: tendermint.abci.Snapshot | null = null,
        app_hash: Uint8Array = new Uint8Array(0)
      ) {
        this.snapshot = snapshot;
        this.app_hash = app_hash;
      }
    }

    @unmanaged
    export class RequestLoadSnapshotChunk {
      static encode(message: RequestLoadSnapshotChunk, writer: Writer): void {
        writer.uint32(8);
        writer.uint64(message.height);

        writer.uint32(16);
        writer.uint32(message.format);

        writer.uint32(24);
        writer.uint32(message.chunk);
      }

      static decode(reader: Reader, length: i32): RequestLoadSnapshotChunk {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new RequestLoadSnapshotChunk();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.height = reader.uint64();
              break;

            case 2:
              message.format = reader.uint32();
              break;

            case 3:
              message.chunk = reader.uint32();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      height: u64;
      format: u32;
      chunk: u32;

      constructor(height: u64 = 0, format: u32 = 0, chunk: u32 = 0) {
        this.height = height;
        this.format = format;
        this.chunk = chunk;
      }
    }

    export class RequestApplySnapshotChunk {
      static encode(message: RequestApplySnapshotChunk, writer: Writer): void {
        writer.uint32(8);
        writer.uint32(message.index);

        writer.uint32(18);
        writer.bytes(message.chunk);

        writer.uint32(26);
        writer.string(message.sender);
      }

      static decode(reader: Reader, length: i32): RequestApplySnapshotChunk {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new RequestApplySnapshotChunk();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.index = reader.uint32();
              break;

            case 2:
              message.chunk = reader.bytes();
              break;

            case 3:
              message.sender = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      index: u32;
      chunk: Uint8Array;
      sender: string;

      constructor(
        index: u32 = 0,
        chunk: Uint8Array = new Uint8Array(0),
        sender: string = ""
      ) {
        this.index = index;
        this.chunk = chunk;
        this.sender = sender;
      }
    }

    export class Response {
      static encode(message: Response, writer: Writer): void {
        const exception = message.exception;
        if (exception !== null) {
          writer.uint32(10);
          writer.fork();
          tendermint.abci.ResponseException.encode(exception, writer);
          writer.ldelim();
        }

        const echo = message.echo;
        if (echo !== null) {
          writer.uint32(18);
          writer.fork();
          tendermint.abci.ResponseEcho.encode(echo, writer);
          writer.ldelim();
        }

        const flush = message.flush;
        if (flush !== null) {
          writer.uint32(26);
          writer.fork();
          tendermint.abci.ResponseFlush.encode(flush, writer);
          writer.ldelim();
        }

        const info = message.info;
        if (info !== null) {
          writer.uint32(34);
          writer.fork();
          tendermint.abci.ResponseInfo.encode(info, writer);
          writer.ldelim();
        }

        const set_option = message.set_option;
        if (set_option !== null) {
          writer.uint32(42);
          writer.fork();
          tendermint.abci.ResponseSetOption.encode(set_option, writer);
          writer.ldelim();
        }

        const init_chain = message.init_chain;
        if (init_chain !== null) {
          writer.uint32(50);
          writer.fork();
          tendermint.abci.ResponseInitChain.encode(init_chain, writer);
          writer.ldelim();
        }

        const query = message.query;
        if (query !== null) {
          writer.uint32(58);
          writer.fork();
          tendermint.abci.ResponseQuery.encode(query, writer);
          writer.ldelim();
        }

        const begin_block = message.begin_block;
        if (begin_block !== null) {
          writer.uint32(66);
          writer.fork();
          tendermint.abci.ResponseBeginBlock.encode(begin_block, writer);
          writer.ldelim();
        }

        const check_tx = message.check_tx;
        if (check_tx !== null) {
          writer.uint32(74);
          writer.fork();
          tendermint.abci.ResponseCheckTx.encode(check_tx, writer);
          writer.ldelim();
        }

        const deliver_tx = message.deliver_tx;
        if (deliver_tx !== null) {
          writer.uint32(82);
          writer.fork();
          tendermint.abci.ResponseDeliverTx.encode(deliver_tx, writer);
          writer.ldelim();
        }

        const end_block = message.end_block;
        if (end_block !== null) {
          writer.uint32(90);
          writer.fork();
          tendermint.abci.ResponseEndBlock.encode(end_block, writer);
          writer.ldelim();
        }

        const commit = message.commit;
        if (commit !== null) {
          writer.uint32(98);
          writer.fork();
          tendermint.abci.ResponseCommit.encode(commit, writer);
          writer.ldelim();
        }

        const list_snapshots = message.list_snapshots;
        if (list_snapshots !== null) {
          writer.uint32(106);
          writer.fork();
          tendermint.abci.ResponseListSnapshots.encode(list_snapshots, writer);
          writer.ldelim();
        }

        const offer_snapshot = message.offer_snapshot;
        if (offer_snapshot !== null) {
          writer.uint32(114);
          writer.fork();
          tendermint.abci.ResponseOfferSnapshot.encode(offer_snapshot, writer);
          writer.ldelim();
        }

        const load_snapshot_chunk = message.load_snapshot_chunk;
        if (load_snapshot_chunk !== null) {
          writer.uint32(122);
          writer.fork();
          tendermint.abci.ResponseLoadSnapshotChunk.encode(
            load_snapshot_chunk,
            writer
          );
          writer.ldelim();
        }

        const apply_snapshot_chunk = message.apply_snapshot_chunk;
        if (apply_snapshot_chunk !== null) {
          writer.uint32(130);
          writer.fork();
          tendermint.abci.ResponseApplySnapshotChunk.encode(
            apply_snapshot_chunk,
            writer
          );
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): Response {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new Response();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.exception = tendermint.abci.ResponseException.decode(
                reader,
                reader.uint32()
              );
              break;

            case 2:
              message.echo = tendermint.abci.ResponseEcho.decode(
                reader,
                reader.uint32()
              );
              break;

            case 3:
              message.flush = tendermint.abci.ResponseFlush.decode(
                reader,
                reader.uint32()
              );
              break;

            case 4:
              message.info = tendermint.abci.ResponseInfo.decode(
                reader,
                reader.uint32()
              );
              break;

            case 5:
              message.set_option = tendermint.abci.ResponseSetOption.decode(
                reader,
                reader.uint32()
              );
              break;

            case 6:
              message.init_chain = tendermint.abci.ResponseInitChain.decode(
                reader,
                reader.uint32()
              );
              break;

            case 7:
              message.query = tendermint.abci.ResponseQuery.decode(
                reader,
                reader.uint32()
              );
              break;

            case 8:
              message.begin_block = tendermint.abci.ResponseBeginBlock.decode(
                reader,
                reader.uint32()
              );
              break;

            case 9:
              message.check_tx = tendermint.abci.ResponseCheckTx.decode(
                reader,
                reader.uint32()
              );
              break;

            case 10:
              message.deliver_tx = tendermint.abci.ResponseDeliverTx.decode(
                reader,
                reader.uint32()
              );
              break;

            case 11:
              message.end_block = tendermint.abci.ResponseEndBlock.decode(
                reader,
                reader.uint32()
              );
              break;

            case 12:
              message.commit = tendermint.abci.ResponseCommit.decode(
                reader,
                reader.uint32()
              );
              break;

            case 13:
              message.list_snapshots =
                tendermint.abci.ResponseListSnapshots.decode(
                  reader,
                  reader.uint32()
                );
              break;

            case 14:
              message.offer_snapshot =
                tendermint.abci.ResponseOfferSnapshot.decode(
                  reader,
                  reader.uint32()
                );
              break;

            case 15:
              message.load_snapshot_chunk =
                tendermint.abci.ResponseLoadSnapshotChunk.decode(
                  reader,
                  reader.uint32()
                );
              break;

            case 16:
              message.apply_snapshot_chunk =
                tendermint.abci.ResponseApplySnapshotChunk.decode(
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

      exception: tendermint.abci.ResponseException | null;
      echo: tendermint.abci.ResponseEcho | null;
      flush: tendermint.abci.ResponseFlush | null;
      info: tendermint.abci.ResponseInfo | null;
      set_option: tendermint.abci.ResponseSetOption | null;
      init_chain: tendermint.abci.ResponseInitChain | null;
      query: tendermint.abci.ResponseQuery | null;
      begin_block: tendermint.abci.ResponseBeginBlock | null;
      check_tx: tendermint.abci.ResponseCheckTx | null;
      deliver_tx: tendermint.abci.ResponseDeliverTx | null;
      end_block: tendermint.abci.ResponseEndBlock | null;
      commit: tendermint.abci.ResponseCommit | null;
      list_snapshots: tendermint.abci.ResponseListSnapshots | null;
      offer_snapshot: tendermint.abci.ResponseOfferSnapshot | null;
      load_snapshot_chunk: tendermint.abci.ResponseLoadSnapshotChunk | null;
      apply_snapshot_chunk: tendermint.abci.ResponseApplySnapshotChunk | null;

      constructor(
        exception: tendermint.abci.ResponseException | null = null,
        echo: tendermint.abci.ResponseEcho | null = null,
        flush: tendermint.abci.ResponseFlush | null = null,
        info: tendermint.abci.ResponseInfo | null = null,
        set_option: tendermint.abci.ResponseSetOption | null = null,
        init_chain: tendermint.abci.ResponseInitChain | null = null,
        query: tendermint.abci.ResponseQuery | null = null,
        begin_block: tendermint.abci.ResponseBeginBlock | null = null,
        check_tx: tendermint.abci.ResponseCheckTx | null = null,
        deliver_tx: tendermint.abci.ResponseDeliverTx | null = null,
        end_block: tendermint.abci.ResponseEndBlock | null = null,
        commit: tendermint.abci.ResponseCommit | null = null,
        list_snapshots: tendermint.abci.ResponseListSnapshots | null = null,
        offer_snapshot: tendermint.abci.ResponseOfferSnapshot | null = null,
        load_snapshot_chunk: tendermint.abci.ResponseLoadSnapshotChunk | null = null,
        apply_snapshot_chunk: tendermint.abci.ResponseApplySnapshotChunk | null = null
      ) {
        this.exception = exception;
        this.echo = echo;
        this.flush = flush;
        this.info = info;
        this.set_option = set_option;
        this.init_chain = init_chain;
        this.query = query;
        this.begin_block = begin_block;
        this.check_tx = check_tx;
        this.deliver_tx = deliver_tx;
        this.end_block = end_block;
        this.commit = commit;
        this.list_snapshots = list_snapshots;
        this.offer_snapshot = offer_snapshot;
        this.load_snapshot_chunk = load_snapshot_chunk;
        this.apply_snapshot_chunk = apply_snapshot_chunk;
      }
    }

    export class ResponseException {
      static encode(message: ResponseException, writer: Writer): void {
        writer.uint32(10);
        writer.string(message.error);
      }

      static decode(reader: Reader, length: i32): ResponseException {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseException();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.error = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      error: string;

      constructor(error: string = "") {
        this.error = error;
      }
    }

    export class ResponseEcho {
      static encode(message: ResponseEcho, writer: Writer): void {
        writer.uint32(10);
        writer.string(message.message);
      }

      static decode(reader: Reader, length: i32): ResponseEcho {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseEcho();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.message = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      message: string;

      constructor(message: string = "") {
        this.message = message;
      }
    }

    @unmanaged
    export class ResponseFlush {
      static encode(message: ResponseFlush, writer: Writer): void {}

      static decode(reader: Reader, length: i32): ResponseFlush {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseFlush();

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

    export class ResponseInfo {
      static encode(message: ResponseInfo, writer: Writer): void {
        writer.uint32(10);
        writer.string(message.data);

        writer.uint32(18);
        writer.string(message.version);

        writer.uint32(24);
        writer.uint64(message.app_version);

        writer.uint32(32);
        writer.int64(message.last_block_height);

        writer.uint32(42);
        writer.bytes(message.last_block_app_hash);
      }

      static decode(reader: Reader, length: i32): ResponseInfo {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseInfo();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.data = reader.string();
              break;

            case 2:
              message.version = reader.string();
              break;

            case 3:
              message.app_version = reader.uint64();
              break;

            case 4:
              message.last_block_height = reader.int64();
              break;

            case 5:
              message.last_block_app_hash = reader.bytes();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      data: string;
      version: string;
      app_version: u64;
      last_block_height: i64;
      last_block_app_hash: Uint8Array;

      constructor(
        data: string = "",
        version: string = "",
        app_version: u64 = 0,
        last_block_height: i64 = 0,
        last_block_app_hash: Uint8Array = new Uint8Array(0)
      ) {
        this.data = data;
        this.version = version;
        this.app_version = app_version;
        this.last_block_height = last_block_height;
        this.last_block_app_hash = last_block_app_hash;
      }
    }

    export class ResponseSetOption {
      static encode(message: ResponseSetOption, writer: Writer): void {
        writer.uint32(8);
        writer.uint32(message.code);

        writer.uint32(26);
        writer.string(message.log);

        writer.uint32(34);
        writer.string(message.info);
      }

      static decode(reader: Reader, length: i32): ResponseSetOption {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseSetOption();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.code = reader.uint32();
              break;

            case 3:
              message.log = reader.string();
              break;

            case 4:
              message.info = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      code: u32;
      log: string;
      info: string;

      constructor(code: u32 = 0, log: string = "", info: string = "") {
        this.code = code;
        this.log = log;
        this.info = info;
      }
    }

    export class ResponseInitChain {
      static encode(message: ResponseInitChain, writer: Writer): void {
        const consensus_params = message.consensus_params;
        if (consensus_params !== null) {
          writer.uint32(10);
          writer.fork();
          tendermint.abci.ConsensusParams.encode(consensus_params, writer);
          writer.ldelim();
        }

        const validators = message.validators;
        for (let i = 0; i < validators.length; ++i) {
          writer.uint32(18);
          writer.fork();
          tendermint.abci.ValidatorUpdate.encode(validators[i], writer);
          writer.ldelim();
        }

        writer.uint32(26);
        writer.bytes(message.app_hash);
      }

      static decode(reader: Reader, length: i32): ResponseInitChain {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseInitChain();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.consensus_params = tendermint.abci.ConsensusParams.decode(
                reader,
                reader.uint32()
              );
              break;

            case 2:
              message.validators.push(
                tendermint.abci.ValidatorUpdate.decode(reader, reader.uint32())
              );
              break;

            case 3:
              message.app_hash = reader.bytes();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      consensus_params: tendermint.abci.ConsensusParams | null;
      validators: Array<tendermint.abci.ValidatorUpdate>;
      app_hash: Uint8Array;

      constructor(
        consensus_params: tendermint.abci.ConsensusParams | null = null,
        validators: Array<tendermint.abci.ValidatorUpdate> = [],
        app_hash: Uint8Array = new Uint8Array(0)
      ) {
        this.consensus_params = consensus_params;
        this.validators = validators;
        this.app_hash = app_hash;
      }
    }

    export class ResponseQuery {
      static encode(message: ResponseQuery, writer: Writer): void {
        writer.uint32(8);
        writer.uint32(message.code);

        writer.uint32(26);
        writer.string(message.log);

        writer.uint32(34);
        writer.string(message.info);

        writer.uint32(40);
        writer.int64(message.index);

        writer.uint32(50);
        writer.bytes(message.key);

        writer.uint32(58);
        writer.bytes(message.value);

        const proof_ops = message.proof_ops;
        if (proof_ops !== null) {
          writer.uint32(66);
          writer.fork();
          tendermint_2.crypto.ProofOps.encode(proof_ops, writer);
          writer.ldelim();
        }

        writer.uint32(72);
        writer.int64(message.height);

        writer.uint32(82);
        writer.string(message.codespace);
      }

      static decode(reader: Reader, length: i32): ResponseQuery {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseQuery();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.code = reader.uint32();
              break;

            case 3:
              message.log = reader.string();
              break;

            case 4:
              message.info = reader.string();
              break;

            case 5:
              message.index = reader.int64();
              break;

            case 6:
              message.key = reader.bytes();
              break;

            case 7:
              message.value = reader.bytes();
              break;

            case 8:
              message.proof_ops = tendermint_2.crypto.ProofOps.decode(
                reader,
                reader.uint32()
              );
              break;

            case 9:
              message.height = reader.int64();
              break;

            case 10:
              message.codespace = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      code: u32;
      log: string;
      info: string;
      index: i64;
      key: Uint8Array;
      value: Uint8Array;
      proof_ops: tendermint_2.crypto.ProofOps | null;
      height: i64;
      codespace: string;

      constructor(
        code: u32 = 0,
        log: string = "",
        info: string = "",
        index: i64 = 0,
        key: Uint8Array = new Uint8Array(0),
        value: Uint8Array = new Uint8Array(0),
        proof_ops: tendermint_2.crypto.ProofOps | null = null,
        height: i64 = 0,
        codespace: string = ""
      ) {
        this.code = code;
        this.log = log;
        this.info = info;
        this.index = index;
        this.key = key;
        this.value = value;
        this.proof_ops = proof_ops;
        this.height = height;
        this.codespace = codespace;
      }
    }

    export class ResponseBeginBlock {
      static encode(message: ResponseBeginBlock, writer: Writer): void {
        const events = message.events;
        for (let i = 0; i < events.length; ++i) {
          writer.uint32(10);
          writer.fork();
          tendermint.abci.Event.encode(events[i], writer);
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): ResponseBeginBlock {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseBeginBlock();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.events.push(
                tendermint.abci.Event.decode(reader, reader.uint32())
              );
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      events: Array<tendermint.abci.Event>;

      constructor(events: Array<tendermint.abci.Event> = []) {
        this.events = events;
      }
    }

    export class ResponseCheckTx {
      static encode(message: ResponseCheckTx, writer: Writer): void {
        writer.uint32(8);
        writer.uint32(message.code);

        writer.uint32(18);
        writer.bytes(message.data);

        writer.uint32(26);
        writer.string(message.log);

        writer.uint32(34);
        writer.string(message.info);

        writer.uint32(40);
        writer.int64(message.gas_wanted);

        writer.uint32(48);
        writer.int64(message.gas_used);

        const events = message.events;
        for (let i = 0; i < events.length; ++i) {
          writer.uint32(58);
          writer.fork();
          tendermint.abci.Event.encode(events[i], writer);
          writer.ldelim();
        }

        writer.uint32(66);
        writer.string(message.codespace);
      }

      static decode(reader: Reader, length: i32): ResponseCheckTx {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseCheckTx();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.code = reader.uint32();
              break;

            case 2:
              message.data = reader.bytes();
              break;

            case 3:
              message.log = reader.string();
              break;

            case 4:
              message.info = reader.string();
              break;

            case 5:
              message.gas_wanted = reader.int64();
              break;

            case 6:
              message.gas_used = reader.int64();
              break;

            case 7:
              message.events.push(
                tendermint.abci.Event.decode(reader, reader.uint32())
              );
              break;

            case 8:
              message.codespace = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      code: u32;
      data: Uint8Array;
      log: string;
      info: string;
      gas_wanted: i64;
      gas_used: i64;
      events: Array<tendermint.abci.Event>;
      codespace: string;

      constructor(
        code: u32 = 0,
        data: Uint8Array = new Uint8Array(0),
        log: string = "",
        info: string = "",
        gas_wanted: i64 = 0,
        gas_used: i64 = 0,
        events: Array<tendermint.abci.Event> = [],
        codespace: string = ""
      ) {
        this.code = code;
        this.data = data;
        this.log = log;
        this.info = info;
        this.gas_wanted = gas_wanted;
        this.gas_used = gas_used;
        this.events = events;
        this.codespace = codespace;
      }
    }

    export class ResponseDeliverTx {
      static encode(message: ResponseDeliverTx, writer: Writer): void {
        writer.uint32(8);
        writer.uint32(message.code);

        writer.uint32(18);
        writer.bytes(message.data);

        writer.uint32(26);
        writer.string(message.log);

        writer.uint32(34);
        writer.string(message.info);

        writer.uint32(40);
        writer.int64(message.gas_wanted);

        writer.uint32(48);
        writer.int64(message.gas_used);

        const events = message.events;
        for (let i = 0; i < events.length; ++i) {
          writer.uint32(58);
          writer.fork();
          tendermint.abci.Event.encode(events[i], writer);
          writer.ldelim();
        }

        writer.uint32(66);
        writer.string(message.codespace);
      }

      static decode(reader: Reader, length: i32): ResponseDeliverTx {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseDeliverTx();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.code = reader.uint32();
              break;

            case 2:
              message.data = reader.bytes();
              break;

            case 3:
              message.log = reader.string();
              break;

            case 4:
              message.info = reader.string();
              break;

            case 5:
              message.gas_wanted = reader.int64();
              break;

            case 6:
              message.gas_used = reader.int64();
              break;

            case 7:
              message.events.push(
                tendermint.abci.Event.decode(reader, reader.uint32())
              );
              break;

            case 8:
              message.codespace = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      code: u32;
      data: Uint8Array;
      log: string;
      info: string;
      gas_wanted: i64;
      gas_used: i64;
      events: Array<tendermint.abci.Event>;
      codespace: string;

      constructor(
        code: u32 = 0,
        data: Uint8Array = new Uint8Array(0),
        log: string = "",
        info: string = "",
        gas_wanted: i64 = 0,
        gas_used: i64 = 0,
        events: Array<tendermint.abci.Event> = [],
        codespace: string = ""
      ) {
        this.code = code;
        this.data = data;
        this.log = log;
        this.info = info;
        this.gas_wanted = gas_wanted;
        this.gas_used = gas_used;
        this.events = events;
        this.codespace = codespace;
      }
    }

    export class ResponseEndBlock {
      static encode(message: ResponseEndBlock, writer: Writer): void {
        const validator_updates = message.validator_updates;
        for (let i = 0; i < validator_updates.length; ++i) {
          writer.uint32(10);
          writer.fork();
          tendermint.abci.ValidatorUpdate.encode(validator_updates[i], writer);
          writer.ldelim();
        }

        const consensus_param_updates = message.consensus_param_updates;
        if (consensus_param_updates !== null) {
          writer.uint32(18);
          writer.fork();
          tendermint.abci.ConsensusParams.encode(
            consensus_param_updates,
            writer
          );
          writer.ldelim();
        }

        const events = message.events;
        for (let i = 0; i < events.length; ++i) {
          writer.uint32(26);
          writer.fork();
          tendermint.abci.Event.encode(events[i], writer);
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): ResponseEndBlock {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseEndBlock();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.validator_updates.push(
                tendermint.abci.ValidatorUpdate.decode(reader, reader.uint32())
              );
              break;

            case 2:
              message.consensus_param_updates =
                tendermint.abci.ConsensusParams.decode(reader, reader.uint32());
              break;

            case 3:
              message.events.push(
                tendermint.abci.Event.decode(reader, reader.uint32())
              );
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      validator_updates: Array<tendermint.abci.ValidatorUpdate>;
      consensus_param_updates: tendermint.abci.ConsensusParams | null;
      events: Array<tendermint.abci.Event>;

      constructor(
        validator_updates: Array<tendermint.abci.ValidatorUpdate> = [],
        consensus_param_updates: tendermint.abci.ConsensusParams | null = null,
        events: Array<tendermint.abci.Event> = []
      ) {
        this.validator_updates = validator_updates;
        this.consensus_param_updates = consensus_param_updates;
        this.events = events;
      }
    }

    export class ResponseCommit {
      static encode(message: ResponseCommit, writer: Writer): void {
        writer.uint32(18);
        writer.bytes(message.data);

        writer.uint32(24);
        writer.int64(message.retain_height);
      }

      static decode(reader: Reader, length: i32): ResponseCommit {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseCommit();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 2:
              message.data = reader.bytes();
              break;

            case 3:
              message.retain_height = reader.int64();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      data: Uint8Array;
      retain_height: i64;

      constructor(
        data: Uint8Array = new Uint8Array(0),
        retain_height: i64 = 0
      ) {
        this.data = data;
        this.retain_height = retain_height;
      }
    }

    export class ResponseListSnapshots {
      static encode(message: ResponseListSnapshots, writer: Writer): void {
        const snapshots = message.snapshots;
        for (let i = 0; i < snapshots.length; ++i) {
          writer.uint32(10);
          writer.fork();
          tendermint.abci.Snapshot.encode(snapshots[i], writer);
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): ResponseListSnapshots {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseListSnapshots();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.snapshots.push(
                tendermint.abci.Snapshot.decode(reader, reader.uint32())
              );
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      snapshots: Array<tendermint.abci.Snapshot>;

      constructor(snapshots: Array<tendermint.abci.Snapshot> = []) {
        this.snapshots = snapshots;
      }
    }

    @unmanaged
    export class ResponseOfferSnapshot {
      static encode(message: ResponseOfferSnapshot, writer: Writer): void {
        writer.uint32(8);
        writer.int32(message.result);
      }

      static decode(reader: Reader, length: i32): ResponseOfferSnapshot {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseOfferSnapshot();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.result = reader.int32();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      result: tendermint.abci.ResponseOfferSnapshot.Result;

      constructor(result: tendermint.abci.ResponseOfferSnapshot.Result = 0) {
        this.result = result;
      }
    }

    export namespace ResponseOfferSnapshot {
      export enum Result {
        UNKNOWN = 0,
        ACCEPT = 1,
        ABORT = 2,
        REJECT = 3,
        REJECT_FORMAT = 4,
        REJECT_SENDER = 5,
      }
    }

    export class ResponseLoadSnapshotChunk {
      static encode(message: ResponseLoadSnapshotChunk, writer: Writer): void {
        writer.uint32(10);
        writer.bytes(message.chunk);
      }

      static decode(reader: Reader, length: i32): ResponseLoadSnapshotChunk {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseLoadSnapshotChunk();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.chunk = reader.bytes();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      chunk: Uint8Array;

      constructor(chunk: Uint8Array = new Uint8Array(0)) {
        this.chunk = chunk;
      }
    }

    export class ResponseApplySnapshotChunk {
      static encode(message: ResponseApplySnapshotChunk, writer: Writer): void {
        writer.uint32(8);
        writer.int32(message.result);

        const refetch_chunks = message.refetch_chunks;
        if (refetch_chunks.length !== 0) {
          for (let i = 0; i < refetch_chunks.length; ++i) {
            writer.uint32(16);
            writer.uint32(refetch_chunks[i]);
          }
        }

        const reject_senders = message.reject_senders;
        if (reject_senders.length !== 0) {
          for (let i = 0; i < reject_senders.length; ++i) {
            writer.uint32(26);
            writer.string(reject_senders[i]);
          }
        }
      }

      static decode(reader: Reader, length: i32): ResponseApplySnapshotChunk {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ResponseApplySnapshotChunk();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.result = reader.int32();
              break;

            case 2:
              message.refetch_chunks.push(reader.uint32());
              break;

            case 3:
              message.reject_senders.push(reader.string());
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      result: tendermint.abci.ResponseApplySnapshotChunk.Result;
      refetch_chunks: Array<u32>;
      reject_senders: Array<string>;

      constructor(
        result: tendermint.abci.ResponseApplySnapshotChunk.Result = 0,
        refetch_chunks: Array<u32> = [],
        reject_senders: Array<string> = []
      ) {
        this.result = result;
        this.refetch_chunks = refetch_chunks;
        this.reject_senders = reject_senders;
      }
    }

    export namespace ResponseApplySnapshotChunk {
      export enum Result {
        UNKNOWN = 0,
        ACCEPT = 1,
        ABORT = 2,
        RETRY = 3,
        RETRY_SNAPSHOT = 4,
        REJECT_SNAPSHOT = 5,
      }
    }

    export class ConsensusParams {
      static encode(message: ConsensusParams, writer: Writer): void {
        const block = message.block;
        if (block !== null) {
          writer.uint32(10);
          writer.fork();
          tendermint.abci.BlockParams.encode(block, writer);
          writer.ldelim();
        }

        const evidence = message.evidence;
        if (evidence !== null) {
          writer.uint32(18);
          writer.fork();
          tendermint_2.types.EvidenceParams.encode(evidence, writer);
          writer.ldelim();
        }

        const validator = message.validator;
        if (validator !== null) {
          writer.uint32(26);
          writer.fork();
          tendermint_2.types.ValidatorParams.encode(validator, writer);
          writer.ldelim();
        }

        const version = message.version;
        if (version !== null) {
          writer.uint32(34);
          writer.fork();
          tendermint_2.types.VersionParams.encode(version, writer);
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): ConsensusParams {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ConsensusParams();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.block = tendermint.abci.BlockParams.decode(
                reader,
                reader.uint32()
              );
              break;

            case 2:
              message.evidence = tendermint_2.types.EvidenceParams.decode(
                reader,
                reader.uint32()
              );
              break;

            case 3:
              message.validator = tendermint_2.types.ValidatorParams.decode(
                reader,
                reader.uint32()
              );
              break;

            case 4:
              message.version = tendermint_2.types.VersionParams.decode(
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

      block: tendermint.abci.BlockParams | null;
      evidence: tendermint_2.types.EvidenceParams | null;
      validator: tendermint_2.types.ValidatorParams | null;
      version: tendermint_2.types.VersionParams | null;

      constructor(
        block: tendermint.abci.BlockParams | null = null,
        evidence: tendermint_2.types.EvidenceParams | null = null,
        validator: tendermint_2.types.ValidatorParams | null = null,
        version: tendermint_2.types.VersionParams | null = null
      ) {
        this.block = block;
        this.evidence = evidence;
        this.validator = validator;
        this.version = version;
      }
    }

    @unmanaged
    export class BlockParams {
      static encode(message: BlockParams, writer: Writer): void {
        writer.uint32(8);
        writer.int64(message.max_bytes);

        writer.uint32(16);
        writer.int64(message.max_gas);
      }

      static decode(reader: Reader, length: i32): BlockParams {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new BlockParams();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.max_bytes = reader.int64();
              break;

            case 2:
              message.max_gas = reader.int64();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      max_bytes: i64;
      max_gas: i64;

      constructor(max_bytes: i64 = 0, max_gas: i64 = 0) {
        this.max_bytes = max_bytes;
        this.max_gas = max_gas;
      }
    }

    export class LastCommitInfo {
      static encode(message: LastCommitInfo, writer: Writer): void {
        writer.uint32(8);
        writer.int32(message.round);

        const votes = message.votes;
        for (let i = 0; i < votes.length; ++i) {
          writer.uint32(18);
          writer.fork();
          tendermint.abci.VoteInfo.encode(votes[i], writer);
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): LastCommitInfo {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new LastCommitInfo();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.round = reader.int32();
              break;

            case 2:
              message.votes.push(
                tendermint.abci.VoteInfo.decode(reader, reader.uint32())
              );
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      round: i32;
      votes: Array<tendermint.abci.VoteInfo>;

      constructor(round: i32 = 0, votes: Array<tendermint.abci.VoteInfo> = []) {
        this.round = round;
        this.votes = votes;
      }
    }

    export class Event {
      static encode(message: Event, writer: Writer): void {
        writer.uint32(10);
        writer.string(message.type);

        const attributes = message.attributes;
        for (let i = 0; i < attributes.length; ++i) {
          writer.uint32(18);
          writer.fork();
          tendermint.abci.EventAttribute.encode(attributes[i], writer);
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): Event {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new Event();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.type = reader.string();
              break;

            case 2:
              message.attributes.push(
                tendermint.abci.EventAttribute.decode(reader, reader.uint32())
              );
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      type: string;
      attributes: Array<tendermint.abci.EventAttribute>;

      constructor(
        type: string = "",
        attributes: Array<tendermint.abci.EventAttribute> = []
      ) {
        this.type = type;
        this.attributes = attributes;
      }
    }

    export class EventAttribute {
      static encode(message: EventAttribute, writer: Writer): void {
        writer.uint32(10);
        writer.bytes(message.key);

        writer.uint32(18);
        writer.bytes(message.value);

        writer.uint32(24);
        writer.bool(message.index);
      }

      static decode(reader: Reader, length: i32): EventAttribute {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new EventAttribute();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.key = reader.bytes();
              break;

            case 2:
              message.value = reader.bytes();
              break;

            case 3:
              message.index = reader.bool();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      key: Uint8Array;
      value: Uint8Array;
      index: bool;

      constructor(
        key: Uint8Array = new Uint8Array(0),
        value: Uint8Array = new Uint8Array(0),
        index: bool = false
      ) {
        this.key = key;
        this.value = value;
        this.index = index;
      }
    }

    export class TxResult {
      static encode(message: TxResult, writer: Writer): void {
        writer.uint32(8);
        writer.int64(message.height);

        writer.uint32(16);
        writer.uint32(message.index);

        writer.uint32(26);
        writer.bytes(message.tx);

        const result = message.result;
        if (result !== null) {
          writer.uint32(34);
          writer.fork();
          tendermint.abci.ResponseDeliverTx.encode(result, writer);
          writer.ldelim();
        }
      }

      static decode(reader: Reader, length: i32): TxResult {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new TxResult();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.height = reader.int64();
              break;

            case 2:
              message.index = reader.uint32();
              break;

            case 3:
              message.tx = reader.bytes();
              break;

            case 4:
              message.result = tendermint.abci.ResponseDeliverTx.decode(
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

      height: i64;
      index: u32;
      tx: Uint8Array;
      result: tendermint.abci.ResponseDeliverTx | null;

      constructor(
        height: i64 = 0,
        index: u32 = 0,
        tx: Uint8Array = new Uint8Array(0),
        result: tendermint.abci.ResponseDeliverTx | null = null
      ) {
        this.height = height;
        this.index = index;
        this.tx = tx;
        this.result = result;
      }
    }

    export class Validator {
      static encode(message: Validator, writer: Writer): void {
        writer.uint32(10);
        writer.bytes(message.address);

        writer.uint32(24);
        writer.int64(message.power);
      }

      static decode(reader: Reader, length: i32): Validator {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new Validator();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.address = reader.bytes();
              break;

            case 3:
              message.power = reader.int64();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      address: Uint8Array;
      power: i64;

      constructor(address: Uint8Array = new Uint8Array(0), power: i64 = 0) {
        this.address = address;
        this.power = power;
      }
    }

    export class ValidatorUpdate {
      static encode(message: ValidatorUpdate, writer: Writer): void {
        const pub_key = message.pub_key;
        if (pub_key !== null) {
          writer.uint32(10);
          writer.fork();
          tendermint_2.crypto.PublicKey.encode(pub_key, writer);
          writer.ldelim();
        }

        writer.uint32(16);
        writer.int64(message.power);
      }

      static decode(reader: Reader, length: i32): ValidatorUpdate {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new ValidatorUpdate();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.pub_key = tendermint_2.crypto.PublicKey.decode(
                reader,
                reader.uint32()
              );
              break;

            case 2:
              message.power = reader.int64();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      pub_key: tendermint_2.crypto.PublicKey | null;
      power: i64;

      constructor(
        pub_key: tendermint_2.crypto.PublicKey | null = null,
        power: i64 = 0
      ) {
        this.pub_key = pub_key;
        this.power = power;
      }
    }

    export class VoteInfo {
      static encode(message: VoteInfo, writer: Writer): void {
        const validator = message.validator;
        if (validator !== null) {
          writer.uint32(10);
          writer.fork();
          tendermint.abci.Validator.encode(validator, writer);
          writer.ldelim();
        }

        writer.uint32(16);
        writer.bool(message.signed_last_block);
      }

      static decode(reader: Reader, length: i32): VoteInfo {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new VoteInfo();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.validator = tendermint.abci.Validator.decode(
                reader,
                reader.uint32()
              );
              break;

            case 2:
              message.signed_last_block = reader.bool();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      validator: tendermint.abci.Validator | null;
      signed_last_block: bool;

      constructor(
        validator: tendermint.abci.Validator | null = null,
        signed_last_block: bool = false
      ) {
        this.validator = validator;
        this.signed_last_block = signed_last_block;
      }
    }

    export class Evidence {
      static encode(message: Evidence, writer: Writer): void {
        writer.uint32(8);
        writer.int32(message.type);

        const validator = message.validator;
        if (validator !== null) {
          writer.uint32(18);
          writer.fork();
          tendermint.abci.Validator.encode(validator, writer);
          writer.ldelim();
        }

        writer.uint32(24);
        writer.int64(message.height);

        const time = message.time;
        if (time !== null) {
          writer.uint32(34);
          writer.fork();
          google.protobuf.Timestamp.encode(time, writer);
          writer.ldelim();
        }

        writer.uint32(40);
        writer.int64(message.total_voting_power);
      }

      static decode(reader: Reader, length: i32): Evidence {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new Evidence();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.type = reader.int32();
              break;

            case 2:
              message.validator = tendermint.abci.Validator.decode(
                reader,
                reader.uint32()
              );
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
              message.total_voting_power = reader.int64();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      type: tendermint.abci.EvidenceType;
      validator: tendermint.abci.Validator | null;
      height: i64;
      time: google.protobuf.Timestamp | null;
      total_voting_power: i64;

      constructor(
        type: tendermint.abci.EvidenceType = 0,
        validator: tendermint.abci.Validator | null = null,
        height: i64 = 0,
        time: google.protobuf.Timestamp | null = null,
        total_voting_power: i64 = 0
      ) {
        this.type = type;
        this.validator = validator;
        this.height = height;
        this.time = time;
        this.total_voting_power = total_voting_power;
      }
    }

    export class Snapshot {
      static encode(message: Snapshot, writer: Writer): void {
        writer.uint32(8);
        writer.uint64(message.height);

        writer.uint32(16);
        writer.uint32(message.format);

        writer.uint32(24);
        writer.uint32(message.chunks);

        writer.uint32(34);
        writer.bytes(message.hash);

        writer.uint32(42);
        writer.bytes(message.metadata);
      }

      static decode(reader: Reader, length: i32): Snapshot {
        const end: usize = length < 0 ? reader.end : reader.ptr + length;
        const message = new Snapshot();

        while (reader.ptr < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.height = reader.uint64();
              break;

            case 2:
              message.format = reader.uint32();
              break;

            case 3:
              message.chunks = reader.uint32();
              break;

            case 4:
              message.hash = reader.bytes();
              break;

            case 5:
              message.metadata = reader.bytes();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      }

      height: u64;
      format: u32;
      chunks: u32;
      hash: Uint8Array;
      metadata: Uint8Array;

      constructor(
        height: u64 = 0,
        format: u32 = 0,
        chunks: u32 = 0,
        hash: Uint8Array = new Uint8Array(0),
        metadata: Uint8Array = new Uint8Array(0)
      ) {
        this.height = height;
        this.format = format;
        this.chunks = chunks;
        this.hash = hash;
        this.metadata = metadata;
      }
    }

    export enum CheckTxType {
      NEW = 0,
      RECHECK = 1,
    }

    export enum EvidenceType {
      UNKNOWN = 0,
      DUPLICATE_VOTE = 1,
      LIGHT_CLIENT_ATTACK = 2,
    }
  }
}
