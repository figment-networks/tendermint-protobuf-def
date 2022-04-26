import { Writer, Reader } from "as-proto";

export namespace cosmos {
  export namespace base {
    export namespace reflection {
      export namespace v2alpha1 {
        export class AppDescriptor {
          static encode(message: AppDescriptor, writer: Writer): void {
            const authn = message.authn;
            if (authn !== null) {
              writer.uint32(10);
              writer.fork();
              cosmos.base.reflection.v2alpha1.AuthnDescriptor.encode(
                authn,
                writer
              );
              writer.ldelim();
            }

            const chain = message.chain;
            if (chain !== null) {
              writer.uint32(18);
              writer.fork();
              cosmos.base.reflection.v2alpha1.ChainDescriptor.encode(
                chain,
                writer
              );
              writer.ldelim();
            }

            const codec = message.codec;
            if (codec !== null) {
              writer.uint32(26);
              writer.fork();
              cosmos.base.reflection.v2alpha1.CodecDescriptor.encode(
                codec,
                writer
              );
              writer.ldelim();
            }

            const configuration = message.configuration;
            if (configuration !== null) {
              writer.uint32(34);
              writer.fork();
              cosmos.base.reflection.v2alpha1.ConfigurationDescriptor.encode(
                configuration,
                writer
              );
              writer.ldelim();
            }

            const query_services = message.query_services;
            if (query_services !== null) {
              writer.uint32(42);
              writer.fork();
              cosmos.base.reflection.v2alpha1.QueryServicesDescriptor.encode(
                query_services,
                writer
              );
              writer.ldelim();
            }

            const tx = message.tx;
            if (tx !== null) {
              writer.uint32(50);
              writer.fork();
              cosmos.base.reflection.v2alpha1.TxDescriptor.encode(tx, writer);
              writer.ldelim();
            }
          }

          static decode(reader: Reader, length: i32): AppDescriptor {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new AppDescriptor();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.authn =
                    cosmos.base.reflection.v2alpha1.AuthnDescriptor.decode(
                      reader,
                      reader.uint32()
                    );
                  break;

                case 2:
                  message.chain =
                    cosmos.base.reflection.v2alpha1.ChainDescriptor.decode(
                      reader,
                      reader.uint32()
                    );
                  break;

                case 3:
                  message.codec =
                    cosmos.base.reflection.v2alpha1.CodecDescriptor.decode(
                      reader,
                      reader.uint32()
                    );
                  break;

                case 4:
                  message.configuration =
                    cosmos.base.reflection.v2alpha1.ConfigurationDescriptor.decode(
                      reader,
                      reader.uint32()
                    );
                  break;

                case 5:
                  message.query_services =
                    cosmos.base.reflection.v2alpha1.QueryServicesDescriptor.decode(
                      reader,
                      reader.uint32()
                    );
                  break;

                case 6:
                  message.tx =
                    cosmos.base.reflection.v2alpha1.TxDescriptor.decode(
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

          authn: cosmos.base.reflection.v2alpha1.AuthnDescriptor | null;
          chain: cosmos.base.reflection.v2alpha1.ChainDescriptor | null;
          codec: cosmos.base.reflection.v2alpha1.CodecDescriptor | null;
          configuration: cosmos.base.reflection.v2alpha1.ConfigurationDescriptor | null;
          query_services: cosmos.base.reflection.v2alpha1.QueryServicesDescriptor | null;
          tx: cosmos.base.reflection.v2alpha1.TxDescriptor | null;

          constructor(
            authn: cosmos.base.reflection.v2alpha1.AuthnDescriptor | null = null,
            chain: cosmos.base.reflection.v2alpha1.ChainDescriptor | null = null,
            codec: cosmos.base.reflection.v2alpha1.CodecDescriptor | null = null,
            configuration: cosmos.base.reflection.v2alpha1.ConfigurationDescriptor | null = null,
            query_services: cosmos.base.reflection.v2alpha1.QueryServicesDescriptor | null = null,
            tx: cosmos.base.reflection.v2alpha1.TxDescriptor | null = null
          ) {
            this.authn = authn;
            this.chain = chain;
            this.codec = codec;
            this.configuration = configuration;
            this.query_services = query_services;
            this.tx = tx;
          }
        }

        export class TxDescriptor {
          static encode(message: TxDescriptor, writer: Writer): void {
            writer.uint32(10);
            writer.string(message.fullname);

            const msgs = message.msgs;
            for (let i = 0; i < msgs.length; ++i) {
              writer.uint32(18);
              writer.fork();
              cosmos.base.reflection.v2alpha1.MsgDescriptor.encode(
                msgs[i],
                writer
              );
              writer.ldelim();
            }
          }

          static decode(reader: Reader, length: i32): TxDescriptor {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new TxDescriptor();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.fullname = reader.string();
                  break;

                case 2:
                  message.msgs.push(
                    cosmos.base.reflection.v2alpha1.MsgDescriptor.decode(
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

          fullname: string;
          msgs: Array<cosmos.base.reflection.v2alpha1.MsgDescriptor>;

          constructor(
            fullname: string = "",
            msgs: Array<cosmos.base.reflection.v2alpha1.MsgDescriptor> = []
          ) {
            this.fullname = fullname;
            this.msgs = msgs;
          }
        }

        export class AuthnDescriptor {
          static encode(message: AuthnDescriptor, writer: Writer): void {
            const sign_modes = message.sign_modes;
            for (let i = 0; i < sign_modes.length; ++i) {
              writer.uint32(10);
              writer.fork();
              cosmos.base.reflection.v2alpha1.SigningModeDescriptor.encode(
                sign_modes[i],
                writer
              );
              writer.ldelim();
            }
          }

          static decode(reader: Reader, length: i32): AuthnDescriptor {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new AuthnDescriptor();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.sign_modes.push(
                    cosmos.base.reflection.v2alpha1.SigningModeDescriptor.decode(
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

          sign_modes: Array<cosmos.base.reflection.v2alpha1.SigningModeDescriptor>;

          constructor(
            sign_modes: Array<cosmos.base.reflection.v2alpha1.SigningModeDescriptor> = []
          ) {
            this.sign_modes = sign_modes;
          }
        }

        export class SigningModeDescriptor {
          static encode(message: SigningModeDescriptor, writer: Writer): void {
            writer.uint32(10);
            writer.string(message.name);

            writer.uint32(16);
            writer.int32(message.number);

            writer.uint32(26);
            writer.string(message.authn_info_provider_method_fullname);
          }

          static decode(reader: Reader, length: i32): SigningModeDescriptor {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new SigningModeDescriptor();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.name = reader.string();
                  break;

                case 2:
                  message.number = reader.int32();
                  break;

                case 3:
                  message.authn_info_provider_method_fullname = reader.string();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            return message;
          }

          name: string;
          number: i32;
          authn_info_provider_method_fullname: string;

          constructor(
            name: string = "",
            number: i32 = 0,
            authn_info_provider_method_fullname: string = ""
          ) {
            this.name = name;
            this.number = number;
            this.authn_info_provider_method_fullname =
              authn_info_provider_method_fullname;
          }
        }

        export class ChainDescriptor {
          static encode(message: ChainDescriptor, writer: Writer): void {
            writer.uint32(10);
            writer.string(message.id);
          }

          static decode(reader: Reader, length: i32): ChainDescriptor {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new ChainDescriptor();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.id = reader.string();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            return message;
          }

          id: string;

          constructor(id: string = "") {
            this.id = id;
          }
        }

        export class CodecDescriptor {
          static encode(message: CodecDescriptor, writer: Writer): void {
            const interfaces = message.interfaces;
            for (let i = 0; i < interfaces.length; ++i) {
              writer.uint32(10);
              writer.fork();
              cosmos.base.reflection.v2alpha1.InterfaceDescriptor.encode(
                interfaces[i],
                writer
              );
              writer.ldelim();
            }
          }

          static decode(reader: Reader, length: i32): CodecDescriptor {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new CodecDescriptor();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.interfaces.push(
                    cosmos.base.reflection.v2alpha1.InterfaceDescriptor.decode(
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

          interfaces: Array<cosmos.base.reflection.v2alpha1.InterfaceDescriptor>;

          constructor(
            interfaces: Array<cosmos.base.reflection.v2alpha1.InterfaceDescriptor> = []
          ) {
            this.interfaces = interfaces;
          }
        }

        export class InterfaceDescriptor {
          static encode(message: InterfaceDescriptor, writer: Writer): void {
            writer.uint32(10);
            writer.string(message.fullname);

            const interface_accepting_messages =
              message.interface_accepting_messages;
            for (let i = 0; i < interface_accepting_messages.length; ++i) {
              writer.uint32(18);
              writer.fork();
              cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor.encode(
                interface_accepting_messages[i],
                writer
              );
              writer.ldelim();
            }

            const interface_implementers = message.interface_implementers;
            for (let i = 0; i < interface_implementers.length; ++i) {
              writer.uint32(26);
              writer.fork();
              cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor.encode(
                interface_implementers[i],
                writer
              );
              writer.ldelim();
            }
          }

          static decode(reader: Reader, length: i32): InterfaceDescriptor {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new InterfaceDescriptor();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.fullname = reader.string();
                  break;

                case 2:
                  message.interface_accepting_messages.push(
                    cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor.decode(
                      reader,
                      reader.uint32()
                    )
                  );
                  break;

                case 3:
                  message.interface_implementers.push(
                    cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor.decode(
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

          fullname: string;
          interface_accepting_messages: Array<cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor>;
          interface_implementers: Array<cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor>;

          constructor(
            fullname: string = "",
            interface_accepting_messages: Array<cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor> = [],
            interface_implementers: Array<cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor> = []
          ) {
            this.fullname = fullname;
            this.interface_accepting_messages = interface_accepting_messages;
            this.interface_implementers = interface_implementers;
          }
        }

        export class InterfaceImplementerDescriptor {
          static encode(
            message: InterfaceImplementerDescriptor,
            writer: Writer
          ): void {
            writer.uint32(10);
            writer.string(message.fullname);

            writer.uint32(18);
            writer.string(message.type_url);
          }

          static decode(
            reader: Reader,
            length: i32
          ): InterfaceImplementerDescriptor {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new InterfaceImplementerDescriptor();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.fullname = reader.string();
                  break;

                case 2:
                  message.type_url = reader.string();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            return message;
          }

          fullname: string;
          type_url: string;

          constructor(fullname: string = "", type_url: string = "") {
            this.fullname = fullname;
            this.type_url = type_url;
          }
        }

        export class InterfaceAcceptingMessageDescriptor {
          static encode(
            message: InterfaceAcceptingMessageDescriptor,
            writer: Writer
          ): void {
            writer.uint32(10);
            writer.string(message.fullname);

            const field_descriptor_names = message.field_descriptor_names;
            if (field_descriptor_names.length !== 0) {
              for (let i = 0; i < field_descriptor_names.length; ++i) {
                writer.uint32(18);
                writer.string(field_descriptor_names[i]);
              }
            }
          }

          static decode(
            reader: Reader,
            length: i32
          ): InterfaceAcceptingMessageDescriptor {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new InterfaceAcceptingMessageDescriptor();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.fullname = reader.string();
                  break;

                case 2:
                  message.field_descriptor_names.push(reader.string());
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            return message;
          }

          fullname: string;
          field_descriptor_names: Array<string>;

          constructor(
            fullname: string = "",
            field_descriptor_names: Array<string> = []
          ) {
            this.fullname = fullname;
            this.field_descriptor_names = field_descriptor_names;
          }
        }

        export class ConfigurationDescriptor {
          static encode(
            message: ConfigurationDescriptor,
            writer: Writer
          ): void {
            writer.uint32(10);
            writer.string(message.bech32_account_address_prefix);
          }

          static decode(reader: Reader, length: i32): ConfigurationDescriptor {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new ConfigurationDescriptor();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.bech32_account_address_prefix = reader.string();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            return message;
          }

          bech32_account_address_prefix: string;

          constructor(bech32_account_address_prefix: string = "") {
            this.bech32_account_address_prefix = bech32_account_address_prefix;
          }
        }

        export class MsgDescriptor {
          static encode(message: MsgDescriptor, writer: Writer): void {
            writer.uint32(10);
            writer.string(message.msg_type_url);
          }

          static decode(reader: Reader, length: i32): MsgDescriptor {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new MsgDescriptor();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.msg_type_url = reader.string();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            return message;
          }

          msg_type_url: string;

          constructor(msg_type_url: string = "") {
            this.msg_type_url = msg_type_url;
          }
        }

        @unmanaged
        export class GetAuthnDescriptorRequest {
          static encode(
            message: GetAuthnDescriptorRequest,
            writer: Writer
          ): void {}

          static decode(
            reader: Reader,
            length: i32
          ): GetAuthnDescriptorRequest {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new GetAuthnDescriptorRequest();

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

        export class GetAuthnDescriptorResponse {
          static encode(
            message: GetAuthnDescriptorResponse,
            writer: Writer
          ): void {
            const authn = message.authn;
            if (authn !== null) {
              writer.uint32(10);
              writer.fork();
              cosmos.base.reflection.v2alpha1.AuthnDescriptor.encode(
                authn,
                writer
              );
              writer.ldelim();
            }
          }

          static decode(
            reader: Reader,
            length: i32
          ): GetAuthnDescriptorResponse {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new GetAuthnDescriptorResponse();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.authn =
                    cosmos.base.reflection.v2alpha1.AuthnDescriptor.decode(
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

          authn: cosmos.base.reflection.v2alpha1.AuthnDescriptor | null;

          constructor(
            authn: cosmos.base.reflection.v2alpha1.AuthnDescriptor | null = null
          ) {
            this.authn = authn;
          }
        }

        @unmanaged
        export class GetChainDescriptorRequest {
          static encode(
            message: GetChainDescriptorRequest,
            writer: Writer
          ): void {}

          static decode(
            reader: Reader,
            length: i32
          ): GetChainDescriptorRequest {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new GetChainDescriptorRequest();

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

        export class GetChainDescriptorResponse {
          static encode(
            message: GetChainDescriptorResponse,
            writer: Writer
          ): void {
            const chain = message.chain;
            if (chain !== null) {
              writer.uint32(10);
              writer.fork();
              cosmos.base.reflection.v2alpha1.ChainDescriptor.encode(
                chain,
                writer
              );
              writer.ldelim();
            }
          }

          static decode(
            reader: Reader,
            length: i32
          ): GetChainDescriptorResponse {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new GetChainDescriptorResponse();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.chain =
                    cosmos.base.reflection.v2alpha1.ChainDescriptor.decode(
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

          chain: cosmos.base.reflection.v2alpha1.ChainDescriptor | null;

          constructor(
            chain: cosmos.base.reflection.v2alpha1.ChainDescriptor | null = null
          ) {
            this.chain = chain;
          }
        }

        @unmanaged
        export class GetCodecDescriptorRequest {
          static encode(
            message: GetCodecDescriptorRequest,
            writer: Writer
          ): void {}

          static decode(
            reader: Reader,
            length: i32
          ): GetCodecDescriptorRequest {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new GetCodecDescriptorRequest();

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

        export class GetCodecDescriptorResponse {
          static encode(
            message: GetCodecDescriptorResponse,
            writer: Writer
          ): void {
            const codec = message.codec;
            if (codec !== null) {
              writer.uint32(10);
              writer.fork();
              cosmos.base.reflection.v2alpha1.CodecDescriptor.encode(
                codec,
                writer
              );
              writer.ldelim();
            }
          }

          static decode(
            reader: Reader,
            length: i32
          ): GetCodecDescriptorResponse {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new GetCodecDescriptorResponse();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.codec =
                    cosmos.base.reflection.v2alpha1.CodecDescriptor.decode(
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

          codec: cosmos.base.reflection.v2alpha1.CodecDescriptor | null;

          constructor(
            codec: cosmos.base.reflection.v2alpha1.CodecDescriptor | null = null
          ) {
            this.codec = codec;
          }
        }

        @unmanaged
        export class GetConfigurationDescriptorRequest {
          static encode(
            message: GetConfigurationDescriptorRequest,
            writer: Writer
          ): void {}

          static decode(
            reader: Reader,
            length: i32
          ): GetConfigurationDescriptorRequest {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new GetConfigurationDescriptorRequest();

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

        export class GetConfigurationDescriptorResponse {
          static encode(
            message: GetConfigurationDescriptorResponse,
            writer: Writer
          ): void {
            const config = message.config;
            if (config !== null) {
              writer.uint32(10);
              writer.fork();
              cosmos.base.reflection.v2alpha1.ConfigurationDescriptor.encode(
                config,
                writer
              );
              writer.ldelim();
            }
          }

          static decode(
            reader: Reader,
            length: i32
          ): GetConfigurationDescriptorResponse {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new GetConfigurationDescriptorResponse();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.config =
                    cosmos.base.reflection.v2alpha1.ConfigurationDescriptor.decode(
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

          config: cosmos.base.reflection.v2alpha1.ConfigurationDescriptor | null;

          constructor(
            config: cosmos.base.reflection.v2alpha1.ConfigurationDescriptor | null = null
          ) {
            this.config = config;
          }
        }

        @unmanaged
        export class GetQueryServicesDescriptorRequest {
          static encode(
            message: GetQueryServicesDescriptorRequest,
            writer: Writer
          ): void {}

          static decode(
            reader: Reader,
            length: i32
          ): GetQueryServicesDescriptorRequest {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new GetQueryServicesDescriptorRequest();

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

        export class GetQueryServicesDescriptorResponse {
          static encode(
            message: GetQueryServicesDescriptorResponse,
            writer: Writer
          ): void {
            const queries = message.queries;
            if (queries !== null) {
              writer.uint32(10);
              writer.fork();
              cosmos.base.reflection.v2alpha1.QueryServicesDescriptor.encode(
                queries,
                writer
              );
              writer.ldelim();
            }
          }

          static decode(
            reader: Reader,
            length: i32
          ): GetQueryServicesDescriptorResponse {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new GetQueryServicesDescriptorResponse();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.queries =
                    cosmos.base.reflection.v2alpha1.QueryServicesDescriptor.decode(
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

          queries: cosmos.base.reflection.v2alpha1.QueryServicesDescriptor | null;

          constructor(
            queries: cosmos.base.reflection.v2alpha1.QueryServicesDescriptor | null = null
          ) {
            this.queries = queries;
          }
        }

        @unmanaged
        export class GetTxDescriptorRequest {
          static encode(
            message: GetTxDescriptorRequest,
            writer: Writer
          ): void {}

          static decode(reader: Reader, length: i32): GetTxDescriptorRequest {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new GetTxDescriptorRequest();

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

        export class GetTxDescriptorResponse {
          static encode(
            message: GetTxDescriptorResponse,
            writer: Writer
          ): void {
            const tx = message.tx;
            if (tx !== null) {
              writer.uint32(10);
              writer.fork();
              cosmos.base.reflection.v2alpha1.TxDescriptor.encode(tx, writer);
              writer.ldelim();
            }
          }

          static decode(reader: Reader, length: i32): GetTxDescriptorResponse {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new GetTxDescriptorResponse();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.tx =
                    cosmos.base.reflection.v2alpha1.TxDescriptor.decode(
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

          tx: cosmos.base.reflection.v2alpha1.TxDescriptor | null;

          constructor(
            tx: cosmos.base.reflection.v2alpha1.TxDescriptor | null = null
          ) {
            this.tx = tx;
          }
        }

        export class QueryServicesDescriptor {
          static encode(
            message: QueryServicesDescriptor,
            writer: Writer
          ): void {
            const query_services = message.query_services;
            for (let i = 0; i < query_services.length; ++i) {
              writer.uint32(10);
              writer.fork();
              cosmos.base.reflection.v2alpha1.QueryServiceDescriptor.encode(
                query_services[i],
                writer
              );
              writer.ldelim();
            }
          }

          static decode(reader: Reader, length: i32): QueryServicesDescriptor {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new QueryServicesDescriptor();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.query_services.push(
                    cosmos.base.reflection.v2alpha1.QueryServiceDescriptor.decode(
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

          query_services: Array<cosmos.base.reflection.v2alpha1.QueryServiceDescriptor>;

          constructor(
            query_services: Array<cosmos.base.reflection.v2alpha1.QueryServiceDescriptor> = []
          ) {
            this.query_services = query_services;
          }
        }

        export class QueryServiceDescriptor {
          static encode(message: QueryServiceDescriptor, writer: Writer): void {
            writer.uint32(10);
            writer.string(message.fullname);

            writer.uint32(16);
            writer.bool(message.is_module);

            const methods = message.methods;
            for (let i = 0; i < methods.length; ++i) {
              writer.uint32(26);
              writer.fork();
              cosmos.base.reflection.v2alpha1.QueryMethodDescriptor.encode(
                methods[i],
                writer
              );
              writer.ldelim();
            }
          }

          static decode(reader: Reader, length: i32): QueryServiceDescriptor {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new QueryServiceDescriptor();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.fullname = reader.string();
                  break;

                case 2:
                  message.is_module = reader.bool();
                  break;

                case 3:
                  message.methods.push(
                    cosmos.base.reflection.v2alpha1.QueryMethodDescriptor.decode(
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

          fullname: string;
          is_module: bool;
          methods: Array<cosmos.base.reflection.v2alpha1.QueryMethodDescriptor>;

          constructor(
            fullname: string = "",
            is_module: bool = false,
            methods: Array<cosmos.base.reflection.v2alpha1.QueryMethodDescriptor> = []
          ) {
            this.fullname = fullname;
            this.is_module = is_module;
            this.methods = methods;
          }
        }

        export class QueryMethodDescriptor {
          static encode(message: QueryMethodDescriptor, writer: Writer): void {
            writer.uint32(10);
            writer.string(message.name);

            writer.uint32(18);
            writer.string(message.full_query_path);
          }

          static decode(reader: Reader, length: i32): QueryMethodDescriptor {
            const end: usize = length < 0 ? reader.end : reader.ptr + length;
            const message = new QueryMethodDescriptor();

            while (reader.ptr < end) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  message.name = reader.string();
                  break;

                case 2:
                  message.full_query_path = reader.string();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            return message;
          }

          name: string;
          full_query_path: string;

          constructor(name: string = "", full_query_path: string = "") {
            this.name = name;
            this.full_query_path = full_query_path;
          }
        }
      }
    }
  }
}
