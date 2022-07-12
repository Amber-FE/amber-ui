# Font 字体

### 主色

<div class="font-wrap">
  <div class="font-top">
    <span class="font-title">Typeface:</span>
    <span class="font-zh">中文：苹方</span>
    <span class="font-en">英文：Helvetica Neue</span>
  </div>
  <div class="font-mid-wrap">
    <div class="font-mid">
      <span class="font-title">Weights:</span>
      <div class="drug-wrap">
        <span class="drug" style="font-weight: 400;">药</span>
        <span class="drug" style="font-weight: 500;">药</span>
        <span class="drug" style="font-weight: 600;">药</span>
      </div>
    </div>
    <div class="font-mid">
      <span class="font-title"></span>
      <div class="drug-wrap" style="color: #222;">
        <span class="drug-expl">Regular/400</span>
        <span class="drug-expl">Medium/500</span>
        <span class="drug-expl">Semibold/600</span>
      </div>
    </div>
  </div>
  <div class="font-bottom-wrap">
    <div class="font-bottom-title">
      <span class="font-title">Type styles:</span>
      <div class="title">
        <span class="title-text">命名</span>
        <span style="flex: 6;">展示</span>
      </div>
    </div>
    <div class="font-bottom-title">
      <span class="font-title"></span>
      <div class="example">
        <span class="text-size">36</span>
        <span class="text-expl" style="font-size: 36px;">主标题文字</span>
      </div>
    </div>
    <div class="font-bottom-title">
      <span class="font-title"></span>
      <div class="example">
        <span class="text-size">24</span>
        <span class="text-expl" style="font-size: 24px;">标题字体</span>
      </div>
    </div>
    <div class="font-bottom-title">
      <span class="font-title"></span>
      <div class="example">
        <span class="text-size">21</span>
        <span class="text-expl" style="font-size: 21px;">副标题文字</span>
      </div>
    </div>
    <div class="font-bottom-title">
      <span class="font-title"></span>
      <div class="example">
        <span class="text-size">18</span>
        <span class="text-expl" style="font-size: 18px;">面包屑文字大小</span>
      </div>
    </div>
    <div class="font-bottom-title">
      <span class="font-title"></span>
      <div class="example">
        <span class="text-size">16</span>
        <span class="text-expl" style="font-size: 16px;">正文字体</span>
      </div>
    </div>
    <div class="font-bottom-title">
      <span class="font-title"></span>
      <div class="example">
        <span class="text-size">14</span>
        <span class="text-expl" style="font-size: 14px;">说明性文字</span>
      </div>
    </div>
    <div class="font-bottom-title">
      <span class="font-title"></span>
      <div class="example">
        <span class="text-size">12</span>
        <span class="text-expl" style="font-size: 12px;">最小字体</span>
      </div>
    </div>
  </div>
</div>

<style>
.font-wrap {
  border: 1px solid #eee;
  margin-top: 16px;
  padding: 20px 18px 0px;
}
.font-top {
  display: flex;
  border-bottom: 1px solid #eee;
  padding-bottom: 40px;
  color: #222;
}
.font-title {
  flex: 1;
  font-size: 16px;
}
.font-zh {
  font-size: 34px;
  font-family: PingFangSC-Regular, PingFang SC;
  flex: 2;
}
.font-en {
  flex: 4;
  font-size: 34px;
  font-family: Helvetica Neue;
}
.font-mid-wrap {
  padding-bottom: 50px;
  font-size: 24px;
  margin-top: 50px;
  border-bottom: 1px solid #eee;
}
.font-mid {
  display: flex;
  color: #222;
}
.drug-wrap {
  flex: 6;
}
.drug {
  display: inline-block;
  padding: 19px 23px 18px 24px;
  border: 1px dashed #C8CACC;
  margin-right: 30px;
}
.drug-expl {
  color: #646566;
  font-size: 12px;
  margin-right: 37px;
}
.font-bottom-wrap {
  padding-top: 60px;
}
.font-bottom-title {
  display: flex;
}
.title {
  padding:0 0 10px 10px;
  display: flex;
  flex: 6;
  border-bottom: 2px solid #1A9DFF;
}
.title-text {
  flex: 3;
}
.example {
  display: flex;
  flex: 6;
  padding: 50px 0 50px 10px;
  border-bottom: 1px solid #eee;
}
.text-size {
  padding: 0px 29px;
  background: #EBEDF0;
  color: #646566;
  margin-right: 168px;
  display: inline-block;
  height: 32px;
  line-height: 32px;
}
.text-expl {
  color: #222;
}
</style>
