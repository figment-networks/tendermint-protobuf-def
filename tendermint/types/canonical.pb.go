// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.19.4
// source: tendermint/types/canonical.proto

package types

import (
	_ "github.com/gogo/protobuf/gogoproto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type CanonicalBlockID struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Hash          []byte                  `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	PartSetHeader *CanonicalPartSetHeader `protobuf:"bytes,2,opt,name=part_set_header,json=partSetHeader,proto3" json:"part_set_header,omitempty"`
}

func (x *CanonicalBlockID) Reset() {
	*x = CanonicalBlockID{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tendermint_types_canonical_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CanonicalBlockID) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CanonicalBlockID) ProtoMessage() {}

func (x *CanonicalBlockID) ProtoReflect() protoreflect.Message {
	mi := &file_tendermint_types_canonical_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CanonicalBlockID.ProtoReflect.Descriptor instead.
func (*CanonicalBlockID) Descriptor() ([]byte, []int) {
	return file_tendermint_types_canonical_proto_rawDescGZIP(), []int{0}
}

func (x *CanonicalBlockID) GetHash() []byte {
	if x != nil {
		return x.Hash
	}
	return nil
}

func (x *CanonicalBlockID) GetPartSetHeader() *CanonicalPartSetHeader {
	if x != nil {
		return x.PartSetHeader
	}
	return nil
}

type CanonicalPartSetHeader struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Total uint32 `protobuf:"varint,1,opt,name=total,proto3" json:"total,omitempty"`
	Hash  []byte `protobuf:"bytes,2,opt,name=hash,proto3" json:"hash,omitempty"`
}

func (x *CanonicalPartSetHeader) Reset() {
	*x = CanonicalPartSetHeader{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tendermint_types_canonical_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CanonicalPartSetHeader) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CanonicalPartSetHeader) ProtoMessage() {}

func (x *CanonicalPartSetHeader) ProtoReflect() protoreflect.Message {
	mi := &file_tendermint_types_canonical_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CanonicalPartSetHeader.ProtoReflect.Descriptor instead.
func (*CanonicalPartSetHeader) Descriptor() ([]byte, []int) {
	return file_tendermint_types_canonical_proto_rawDescGZIP(), []int{1}
}

func (x *CanonicalPartSetHeader) GetTotal() uint32 {
	if x != nil {
		return x.Total
	}
	return 0
}

func (x *CanonicalPartSetHeader) GetHash() []byte {
	if x != nil {
		return x.Hash
	}
	return nil
}

type CanonicalProposal struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type      SignedMsgType          `protobuf:"varint,1,opt,name=type,proto3,enum=tendermint.types.SignedMsgType" json:"type,omitempty"` // type alias for byte
	Height    int64                  `protobuf:"fixed64,2,opt,name=height,proto3" json:"height,omitempty"`                                // canonicalization requires fixed size encoding here
	Round     int64                  `protobuf:"fixed64,3,opt,name=round,proto3" json:"round,omitempty"`                                  // canonicalization requires fixed size encoding here
	PolRound  int64                  `protobuf:"varint,4,opt,name=pol_round,json=polRound,proto3" json:"pol_round,omitempty"`
	BlockId   *CanonicalBlockID      `protobuf:"bytes,5,opt,name=block_id,json=blockId,proto3" json:"block_id,omitempty"`
	Timestamp *timestamppb.Timestamp `protobuf:"bytes,6,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	ChainId   string                 `protobuf:"bytes,7,opt,name=chain_id,json=chainId,proto3" json:"chain_id,omitempty"`
}

func (x *CanonicalProposal) Reset() {
	*x = CanonicalProposal{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tendermint_types_canonical_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CanonicalProposal) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CanonicalProposal) ProtoMessage() {}

func (x *CanonicalProposal) ProtoReflect() protoreflect.Message {
	mi := &file_tendermint_types_canonical_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CanonicalProposal.ProtoReflect.Descriptor instead.
func (*CanonicalProposal) Descriptor() ([]byte, []int) {
	return file_tendermint_types_canonical_proto_rawDescGZIP(), []int{2}
}

func (x *CanonicalProposal) GetType() SignedMsgType {
	if x != nil {
		return x.Type
	}
	return SignedMsgType_SIGNED_MSG_TYPE_UNKNOWN
}

func (x *CanonicalProposal) GetHeight() int64 {
	if x != nil {
		return x.Height
	}
	return 0
}

func (x *CanonicalProposal) GetRound() int64 {
	if x != nil {
		return x.Round
	}
	return 0
}

func (x *CanonicalProposal) GetPolRound() int64 {
	if x != nil {
		return x.PolRound
	}
	return 0
}

func (x *CanonicalProposal) GetBlockId() *CanonicalBlockID {
	if x != nil {
		return x.BlockId
	}
	return nil
}

func (x *CanonicalProposal) GetTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

func (x *CanonicalProposal) GetChainId() string {
	if x != nil {
		return x.ChainId
	}
	return ""
}

type CanonicalVote struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type      SignedMsgType          `protobuf:"varint,1,opt,name=type,proto3,enum=tendermint.types.SignedMsgType" json:"type,omitempty"` // type alias for byte
	Height    int64                  `protobuf:"fixed64,2,opt,name=height,proto3" json:"height,omitempty"`                                // canonicalization requires fixed size encoding here
	Round     int64                  `protobuf:"fixed64,3,opt,name=round,proto3" json:"round,omitempty"`                                  // canonicalization requires fixed size encoding here
	BlockId   *CanonicalBlockID      `protobuf:"bytes,4,opt,name=block_id,json=blockId,proto3" json:"block_id,omitempty"`
	Timestamp *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	ChainId   string                 `protobuf:"bytes,6,opt,name=chain_id,json=chainId,proto3" json:"chain_id,omitempty"`
}

func (x *CanonicalVote) Reset() {
	*x = CanonicalVote{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tendermint_types_canonical_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CanonicalVote) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CanonicalVote) ProtoMessage() {}

func (x *CanonicalVote) ProtoReflect() protoreflect.Message {
	mi := &file_tendermint_types_canonical_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CanonicalVote.ProtoReflect.Descriptor instead.
func (*CanonicalVote) Descriptor() ([]byte, []int) {
	return file_tendermint_types_canonical_proto_rawDescGZIP(), []int{3}
}

func (x *CanonicalVote) GetType() SignedMsgType {
	if x != nil {
		return x.Type
	}
	return SignedMsgType_SIGNED_MSG_TYPE_UNKNOWN
}

func (x *CanonicalVote) GetHeight() int64 {
	if x != nil {
		return x.Height
	}
	return 0
}

func (x *CanonicalVote) GetRound() int64 {
	if x != nil {
		return x.Round
	}
	return 0
}

func (x *CanonicalVote) GetBlockId() *CanonicalBlockID {
	if x != nil {
		return x.BlockId
	}
	return nil
}

func (x *CanonicalVote) GetTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

func (x *CanonicalVote) GetChainId() string {
	if x != nil {
		return x.ChainId
	}
	return ""
}

var File_tendermint_types_canonical_proto protoreflect.FileDescriptor

var file_tendermint_types_canonical_proto_rawDesc = []byte{
	0x0a, 0x20, 0x74, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x6d, 0x69, 0x6e, 0x74, 0x2f, 0x74, 0x79, 0x70,
	0x65, 0x73, 0x2f, 0x63, 0x61, 0x6e, 0x6f, 0x6e, 0x69, 0x63, 0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x10, 0x74, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x6d, 0x69, 0x6e, 0x74, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x1a, 0x14, 0x67, 0x6f, 0x67, 0x6f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f,
	0x67, 0x6f, 0x67, 0x6f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x74, 0x65, 0x6e, 0x64,
	0x65, 0x72, 0x6d, 0x69, 0x6e, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x74, 0x79, 0x70,
	0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x7e, 0x0a, 0x10, 0x43, 0x61, 0x6e,
	0x6f, 0x6e, 0x69, 0x63, 0x61, 0x6c, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x49, 0x44, 0x12, 0x12, 0x0a,
	0x04, 0x68, 0x61, 0x73, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x68, 0x61, 0x73,
	0x68, 0x12, 0x56, 0x0a, 0x0f, 0x70, 0x61, 0x72, 0x74, 0x5f, 0x73, 0x65, 0x74, 0x5f, 0x68, 0x65,
	0x61, 0x64, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x28, 0x2e, 0x74, 0x65, 0x6e,
	0x64, 0x65, 0x72, 0x6d, 0x69, 0x6e, 0x74, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x43, 0x61,
	0x6e, 0x6f, 0x6e, 0x69, 0x63, 0x61, 0x6c, 0x50, 0x61, 0x72, 0x74, 0x53, 0x65, 0x74, 0x48, 0x65,
	0x61, 0x64, 0x65, 0x72, 0x42, 0x04, 0xc8, 0xde, 0x1f, 0x00, 0x52, 0x0d, 0x70, 0x61, 0x72, 0x74,
	0x53, 0x65, 0x74, 0x48, 0x65, 0x61, 0x64, 0x65, 0x72, 0x22, 0x42, 0x0a, 0x16, 0x43, 0x61, 0x6e,
	0x6f, 0x6e, 0x69, 0x63, 0x61, 0x6c, 0x50, 0x61, 0x72, 0x74, 0x53, 0x65, 0x74, 0x48, 0x65, 0x61,
	0x64, 0x65, 0x72, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0d, 0x52, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x12, 0x12, 0x0a, 0x04, 0x68, 0x61, 0x73,
	0x68, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x68, 0x61, 0x73, 0x68, 0x22, 0xd9, 0x02,
	0x0a, 0x11, 0x43, 0x61, 0x6e, 0x6f, 0x6e, 0x69, 0x63, 0x61, 0x6c, 0x50, 0x72, 0x6f, 0x70, 0x6f,
	0x73, 0x61, 0x6c, 0x12, 0x33, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0e, 0x32, 0x1f, 0x2e, 0x74, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x6d, 0x69, 0x6e, 0x74, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x2e, 0x53, 0x69, 0x67, 0x6e, 0x65, 0x64, 0x4d, 0x73, 0x67, 0x54, 0x79,
	0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x68, 0x65, 0x69, 0x67,
	0x68, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x10, 0x52, 0x06, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74,
	0x12, 0x14, 0x0a, 0x05, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x10, 0x52,
	0x05, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x12, 0x29, 0x0a, 0x09, 0x70, 0x6f, 0x6c, 0x5f, 0x72, 0x6f,
	0x75, 0x6e, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x42, 0x0c, 0xe2, 0xde, 0x1f, 0x08, 0x50,
	0x4f, 0x4c, 0x52, 0x6f, 0x75, 0x6e, 0x64, 0x52, 0x08, 0x70, 0x6f, 0x6c, 0x52, 0x6f, 0x75, 0x6e,
	0x64, 0x12, 0x4a, 0x0a, 0x08, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x74, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x6d, 0x69, 0x6e, 0x74,
	0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x43, 0x61, 0x6e, 0x6f, 0x6e, 0x69, 0x63, 0x61, 0x6c,
	0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x49, 0x44, 0x42, 0x0b, 0xe2, 0xde, 0x1f, 0x07, 0x42, 0x6c, 0x6f,
	0x63, 0x6b, 0x49, 0x44, 0x52, 0x07, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x49, 0x64, 0x12, 0x42, 0x0a,
	0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x42, 0x08, 0xc8, 0xde,
	0x1f, 0x00, 0x90, 0xdf, 0x1f, 0x01, 0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x12, 0x26, 0x0a, 0x08, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x07, 0x20,
	0x01, 0x28, 0x09, 0x42, 0x0b, 0xe2, 0xde, 0x1f, 0x07, 0x43, 0x68, 0x61, 0x69, 0x6e, 0x49, 0x44,
	0x52, 0x07, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x49, 0x64, 0x22, 0xaa, 0x02, 0x0a, 0x0d, 0x43, 0x61,
	0x6e, 0x6f, 0x6e, 0x69, 0x63, 0x61, 0x6c, 0x56, 0x6f, 0x74, 0x65, 0x12, 0x33, 0x0a, 0x04, 0x74,
	0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1f, 0x2e, 0x74, 0x65, 0x6e, 0x64,
	0x65, 0x72, 0x6d, 0x69, 0x6e, 0x74, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x53, 0x69, 0x67,
	0x6e, 0x65, 0x64, 0x4d, 0x73, 0x67, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65,
	0x12, 0x16, 0x0a, 0x06, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x10,
	0x52, 0x06, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x72, 0x6f, 0x75, 0x6e,
	0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x10, 0x52, 0x05, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x12, 0x4a,
	0x0a, 0x08, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x22, 0x2e, 0x74, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x6d, 0x69, 0x6e, 0x74, 0x2e, 0x74, 0x79,
	0x70, 0x65, 0x73, 0x2e, 0x43, 0x61, 0x6e, 0x6f, 0x6e, 0x69, 0x63, 0x61, 0x6c, 0x42, 0x6c, 0x6f,
	0x63, 0x6b, 0x49, 0x44, 0x42, 0x0b, 0xe2, 0xde, 0x1f, 0x07, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x49,
	0x44, 0x52, 0x07, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x49, 0x64, 0x12, 0x42, 0x0a, 0x09, 0x74, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x42, 0x08, 0xc8, 0xde, 0x1f, 0x00, 0x90,
	0xdf, 0x1f, 0x01, 0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x26,
	0x0a, 0x08, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09,
	0x42, 0x0b, 0xe2, 0xde, 0x1f, 0x07, 0x43, 0x68, 0x61, 0x69, 0x6e, 0x49, 0x44, 0x52, 0x07, 0x63,
	0x68, 0x61, 0x69, 0x6e, 0x49, 0x64, 0x42, 0x46, 0x5a, 0x44, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x66, 0x69, 0x67, 0x6d, 0x65, 0x6e, 0x74, 0x2d, 0x6e, 0x65, 0x74,
	0x77, 0x6f, 0x72, 0x6b, 0x73, 0x2f, 0x74, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x6d, 0x69, 0x6e, 0x74,
	0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2d, 0x64, 0x65, 0x66, 0x2f, 0x74, 0x65,
	0x6e, 0x64, 0x65, 0x72, 0x6d, 0x69, 0x6e, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_tendermint_types_canonical_proto_rawDescOnce sync.Once
	file_tendermint_types_canonical_proto_rawDescData = file_tendermint_types_canonical_proto_rawDesc
)

func file_tendermint_types_canonical_proto_rawDescGZIP() []byte {
	file_tendermint_types_canonical_proto_rawDescOnce.Do(func() {
		file_tendermint_types_canonical_proto_rawDescData = protoimpl.X.CompressGZIP(file_tendermint_types_canonical_proto_rawDescData)
	})
	return file_tendermint_types_canonical_proto_rawDescData
}

var file_tendermint_types_canonical_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_tendermint_types_canonical_proto_goTypes = []interface{}{
	(*CanonicalBlockID)(nil),       // 0: tendermint.types.CanonicalBlockID
	(*CanonicalPartSetHeader)(nil), // 1: tendermint.types.CanonicalPartSetHeader
	(*CanonicalProposal)(nil),      // 2: tendermint.types.CanonicalProposal
	(*CanonicalVote)(nil),          // 3: tendermint.types.CanonicalVote
	(SignedMsgType)(0),             // 4: tendermint.types.SignedMsgType
	(*timestamppb.Timestamp)(nil),  // 5: google.protobuf.Timestamp
}
var file_tendermint_types_canonical_proto_depIdxs = []int32{
	1, // 0: tendermint.types.CanonicalBlockID.part_set_header:type_name -> tendermint.types.CanonicalPartSetHeader
	4, // 1: tendermint.types.CanonicalProposal.type:type_name -> tendermint.types.SignedMsgType
	0, // 2: tendermint.types.CanonicalProposal.block_id:type_name -> tendermint.types.CanonicalBlockID
	5, // 3: tendermint.types.CanonicalProposal.timestamp:type_name -> google.protobuf.Timestamp
	4, // 4: tendermint.types.CanonicalVote.type:type_name -> tendermint.types.SignedMsgType
	0, // 5: tendermint.types.CanonicalVote.block_id:type_name -> tendermint.types.CanonicalBlockID
	5, // 6: tendermint.types.CanonicalVote.timestamp:type_name -> google.protobuf.Timestamp
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_tendermint_types_canonical_proto_init() }
func file_tendermint_types_canonical_proto_init() {
	if File_tendermint_types_canonical_proto != nil {
		return
	}
	file_tendermint_types_types_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_tendermint_types_canonical_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CanonicalBlockID); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_tendermint_types_canonical_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CanonicalPartSetHeader); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_tendermint_types_canonical_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CanonicalProposal); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_tendermint_types_canonical_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CanonicalVote); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_tendermint_types_canonical_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_tendermint_types_canonical_proto_goTypes,
		DependencyIndexes: file_tendermint_types_canonical_proto_depIdxs,
		MessageInfos:      file_tendermint_types_canonical_proto_msgTypes,
	}.Build()
	File_tendermint_types_canonical_proto = out.File
	file_tendermint_types_canonical_proto_rawDesc = nil
	file_tendermint_types_canonical_proto_goTypes = nil
	file_tendermint_types_canonical_proto_depIdxs = nil
}
