const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    //레시피명
    recipeName: {
      type: String,
      required: true,
    },
    //요리 소개
    desc: String,
    //재료 [{재료1:'김치',양:'두주먹'}]
    ingredient: [{ name: String, amount: String }],
    //양념
    seasoning: [{ name: String, amount: String }],
    //조리과정
    process: [{ type: String, required: true }],
    //조리과정 이미지
    processImage: [{ type: String }],
    // 썸네일
    thumbnail: { type: String, required: true, default: "" },
    //완성 사진을 받는 부분입니다.
    doneImage: [{ type: String }],
    //종류별
    category: String,
    //상황별 :
    condition: String,
    //재료별
    material: String,
    //방법별
    cook: String,
    //인원수
    servings: String,
    //요리 시간
    time: Number,
    //난이도
    diffic: Number,

    //작성글이 받은 좋아요 수
    likeCount: {
      type: Number,
      default: 0,
    },
    //작성글이 받은 댓글 수
    commentsCount: {
      type: Number,
      default: 0,
    },
    //작성글이 보여진 횟수
    viewCount: {
      type: Number,
      default: 0,
    },
    //작성글을 유저와 연결합니다
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = PostSchema;
