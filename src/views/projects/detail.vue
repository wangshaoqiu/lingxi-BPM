<style lang="scss" scoped>
.checkPop {
  padding: 15px;
  width: 219px;
  box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
}
.status2 {
  width: 45px;
  height: 18px;
  background: rgba(255, 255, 255, 1);
  border-radius: 9px;
  border: 1px solid rgba(153, 153, 153, 1);
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  text-align: center;
  line-height: 18px;
  position: absolute;
  bottom: 0;
}
.status3 {
  width: 45px;
  height: 18px;
  background: rgba(255, 255, 255, 1);
  border-radius: 9px;
  border: 1px solid #53b4b3;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #53b4b3;
  text-align: center;
  line-height: 18px;
  position: absolute;
  bottom: 0;
}
.status4 {
  width: 45px;
  height: 18px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  border: 1px solid rgba(244, 91, 91, 1);
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(244, 91, 91, 1);
  text-align: center;
  line-height: 18px;
  position: absolute;
  bottom: 0;
}
.selected_box {
  width: 1005;
  height: 340px;
  border: 1px solid #ebeef5;
  margin-top: 8px;
  overflow-y: auto;
}
.select_footer {
  position: absolute;
  width: 100%;
  bottom: 30px;
}
.mask {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.397);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.selectForm1 {
  position: fixed;
  width: 500px;
  top: 100px;
  height: 500px;
  left: 50%;
  margin-left: -250px;
  z-index: 99999;
  background: #fff;
}
.selectForm1_left {
  width: 48%;
  height: 380px;
}
.selectForm1_title {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-bottom: 20px;
}
.selectForm1_wrap {
  position: relative;
  width: 500px;
  height: 500px;
  padding: 25px 25px 30px 25px;
}
.taskHead {
  width: 25px;
  height: 25px;
  background: #53b4b3;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 25px;
  font-size: 10px;
  cursor: pointer;
}
.default_avatar {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.fromJoiner {
  width: 255px;
  height: 320px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 20px;
  .selectWrap {
    width: 215px;
    height: 195px;
    border-radius: 4px;
    border: 1px solid rgba(235, 238, 245, 1);
    overflow-y: auto;
    padding-top: 7px;
    .holdPerson {
      padding: 0 30px 0 15px;
      cursor: pointer;
      height: 40px;
      &:hover {
        background: #f6f7ff;
      }
      img {
        width: 15px;
        height: 15px;
      }
    }
  }
}
.noShow {
  width: 14px;
  height: 14px;
  margin-left: 25px;
  cursor: pointer;
      display: none;
}
.degree {
  height: 24px;
  border-radius: 4px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 24px;
  cursor: pointer;
  padding:0 10px;
}
.degree1 {
  background: rgba(183, 186, 206, 1);
}
.degree2 {
  background: rgba(255, 148, 47, 1);
}
.degree3 {
  background: #f45b5b;
}
.more-nohover {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.more-hover {
  width: 30px;
  height: 30px;
  display: none;
  cursor: pointer;
}
.dropdown1 div .el-dropdown-menu__item {
  height: 24px;
  width: 72px;

  margin-top: 10px;
  padding: 0 10px;
  color: #fff;
  margin-left: 16px;
  text-align: center;
  line-height: 24px;
  font-weight: 500;
  border-radius: 4px;
}
.dropdown1 {
  // padding: 6px 0 0 0;
  width: 104px;
  // height: 137px;
  box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.04);
  padding:16px 0;
}
.dropdown2 {
  width: 180px;
  height: 59px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
}
.dropdown2 img {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}
.dropdown2 .flex div {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.popper__arrow {
  display: none !important;
}
.dropdown1 div:first-child .el-dropdown-menu__item {
  background: #f45b5b;
  margin-top:0;
}
.dropdown1 div:nth-last-child(2) .el-dropdown-menu__item {
  background: rgba(183, 186, 206, 1);
}
.dropdown1 div:nth-of-type(2n) .el-dropdown-menu__item {
  background: rgba(255, 148, 47, 1);
}
.productName {
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  margin-left: 20px;
}
.container_wrap {
  width: 1300px;
  height: 100%;
  overflow: auto;
  background: #fff;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 4px;
}
.container {
  width: 100%;
  background: rgba(248, 248, 248, 1);
  height: 100%;
  overflow-x: auto;
    overflow-y: hidden;

  .header {
    width: 100%;
    height: 68px;
    border-bottom: 1px solid rgba(238, 238, 238, 1);
    padding: 0 30px;
    position: relative;
    .archiveImg {
      position: absolute;
      top: 6px;
      right: 100px;
      width: 140px;
      height: 140px;
      z-index:9999;
    }
    .more_icon {
      color: #666;
      &:hover .more-hover {
        display: block;
      }
      &:hover .more-nohover {
        display: none;
      }
    }
  }
  .main {
    width: 100%;
    height: calc(100% - 185px);
    position: relative;

    .mainLeft {
      width: 55.38%;
      // height: 100%;
      border-right: 1px solid #eee;
      overflow: auto;
      // padding-bottom: 200px;
      .nowLink {
        margin-top:13px;
        img {
          width: 18px;
          height: 18px;
        }
        .nowLink_txt {
          margin-left: 10px;
        }
        .nowLink_value {
          margin-left: 85px;
        }
        .tag{
          width:56px;
height:24px;
border-radius:14px;
border:1px solid rgba(83,180,179,1);
font-size:12px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(83,180,179,1);
text-align: center;
line-height: 24px;
margin-left:20px;
        }
      }
      .period {
        margin-top: 0px;
        img {
          width: 18px;
          height: 18px;
        }
        .el-date-editor {
          width: 150px;
        }
      }
      .childTask {
        margin-top: 25px;
      }
      .childTask2 {
        margin-top: 10px;
        width: 100%;
        min-height: 50px;
        border: 1px solid rgba(238, 238, 238, 1);
        overflow-y: auto; // max-height: 265px;
        border-radius: 4px;
        padding:15px 0;

        // height: 265px;
        .taskItem {
          margin-top: 15px;
          padding: 0 20px 0 30px;
          cursor: pointer;

          &:first-child{
          margin-top:0;
        }

          &:hover .noShow{
            display: block;
          }
          .taskItem1 {
            width: calc(100% - 80px);
            max-width: 426px;
            margin-top:6px;
          }
        }
        .childTask_input {
          // margin-top: 10px;
          margin-bottom:10px;
          padding: 0 20px 0 20px;
          .input_wrap {
            width: 86.07%;
            height: 40px;
            border-radius: 4px;
            // border: 1px solid rgba(238, 238, 238, 1);
            input {
              width: 100%;
              height: 40px;
              // border: 0;
              outline: none;
              padding-left: 10px;
              border: 1px solid rgba(238, 238, 238, 1);
              &:focus{
                border:1px solid #53b4b3;
              }
              &::-webkit-input-placeholder {
                /* WebKit, Blink, Edge */
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
              }
              &:-moz-placeholder {
                /* Mozilla Firefox 4 to 18 */
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
              }
              &::-moz-placeholder {
                /* Mozilla Firefox 19+ */
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
              }
              &:-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
              }
            }
          }
          .taskItem2 {
            margin-left: 31px;
            width:64px;
            .taskHead {
              width: 25px;
              height: 25px;
              background: #53b4b3;
              border-radius: 50%;
              color: #fff;
              text-align: center;
              line-height: 25px;
              font-size: 12px;
            }
            .default_avatar {
              width: 25px;
              height: 25px;
            }
          }
        }
        .addChildTask {
          padding-left: 30px;
          cursor: pointer;
          img {
            width: 10px;
            height: 10px;
          }
          div {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #53b4b3;
            margin-left: 5px;
          }
        }
        .preAddTask {
          padding: 0 20px 0 20px;
          .preAddTask_wrap {
            width: 79.54%;
            flex-direction: row-reverse;
            .sureAddBtn {
              width: 70px;
              margin-left: 40px;
              height: 30px;
              line-height: 30px;
            }
            .cancelAddBtn {
              height: 30px;
              line-height: 30px;
              width:70px;
border-radius:4px;
border:1px solid rgba(204,204,204,1);
text-align: center;
              cursor: pointer;
            }
          }
        }
      }
      .relatedData {
        margin-top: 10px;
        width: 100%;
        min-height: 50px;
        border: 1px solid rgba(238, 238, 238, 1);
        padding-top: 15px;
        padding-bottom: 15px;
        overflow-y: auto; // max-height: 220px;
        border-radius: 4px;
        .dataList {
          margin-top: 5px;
          width: 100%;
          padding: 0 20px 0 15px;
          &:hover .dataList2 .img2_wrap .img2 {
            display: block;
          }

          .dataList2 {
            // width:22.73%;
            .img1 {
              width: 16px;
              height: 16px;
            }
            .img2_wrap {
              width: 14px;
              height: 14px;
              margin-left: 25px;
              .img2 {
                width: 14px;
                height: 14px;
                display: none;
                cursor: pointer;
              }
            }
          }
        }
        .addData {
          padding-left: 30px;
          img {
            width: 10px;
            height: 10px;
          }
          div {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #53b4b3;
            margin-left: 5px;
          }
        }
      }
    }
    .mainright {
      width: 44.62%;
      // height: 100%;
      position: relative; // padding: 30px;
      overflow: hidden;

      // padding-bottom: 200px;
      .joinerArea {
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
        position: relative;
        .avatar {
          margin-right: 10px;
          width: 36px;
          height: 36px;
          line-height: 36px;
          margin-bottom: 10px;
          font-size:12px;
        }
        img {
          width: 36px;
          height: 36px;
          cursor: pointer;
        }
        .loadMore{
          position: absolute;
          top:0;
          right:8px;
          z-index:999;
        }
      }
      .projectNews_wrap{
        padding: 20px 30px;
        &:nth-child(1){
          margin-top:-25px;
        }

      }

    }

  }
}
.loading{
          width:20px;
          height: 20px;
          position: absolute;
          left: 50%;
          margin-left:-10px;
          // top:3px;
        }
.addPanel {
  width: 430px;
  height: 360px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  .panelLeft {
    width: 145px;
    height: 100%;
    overflow: auto;
    border-right: 1px solid #eee;
    padding-top: 25px;
    .panleftItem {
      width: 125px;
      height: 40px;
      background: #fff;
      border-radius: 4px;
      margin: 0 auto;
      text-align: center;
      line-height: 40px;
      color: rgba(102, 102, 102, 1);
      font-size: 14px;
      cursor: pointer;
    }
    .panleftItem2 {
      width: 125px;
      height: 40px;
      background: rgba(83,180,179, 0.09);
      border-radius: 4px;
      color: rgba(51, 51, 51, 1);
      margin: 0 auto;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
      cursor: pointer;
    }
  }
  .panelRight {
    width: 285px;
    height: 100%;
    overflow: auto;
    .executorItem {
      width: 100%;
      height: 40px;
      cursor: pointer;
      &:hover {
        background: rgba(246, 247, 255, 1);
      }
      &:hover img {
        display: block;
      }
      .defaultM {
        width: 61px;
        height: 18px;
        border-radius: 9px;
        border: 1px solid #53b4b3;
        color:#53b4b3;
        font-size: 11px;
        text-align: center;
        line-height: 18px;
        margin-left: 29px;
      }
      img {
        display: none;
      }
    }
  }
}
.checkFiles_btn {
  width: 110px;
  height: 40px;
  background: #53b4b3;
  border-radius: 4px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 40px;
  margin-left: 30px;
  cursor: pointer;
  // @media(min-width: 1800px){
  //   height: 44px;
  //   line-height: 44px;
  // }
}
.files_area {
  width: 577px;
  height: 277px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  overflow: auto;
  .filesArea_head {
    width: 100%;
    height: 62px;
    border-bottom: 1px solid #eee;
    padding: 0 20px;
    position: relative;
    .pass {
      width: 88px;
      height: 35px;
      background: #53b4b3;
      border-radius: 4px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      line-height: 35px;
      margin-left: 185px;
    }
    .reject {
      width: 88px;
      height: 35px;
      border-radius: 4px;
      border: 1px solid #53b4b3;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #53b4b3;
      text-align: center;
      line-height: 35px;
    }
    .upload {
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #53b4b3;
      margin-left: 335px;
    }
    .el-icon-close {
      position: absolute;
      top: 20px;
      right: 20px;
      &:hover{
        color:#53b4b3 !important;
      }
    }
  }
}
.dataList1 {
  width: 77.27%;
  &:hover .img2_wrap .img2 {
    display: block;
  }
  img {
    width: 50px;
    height: 50px;
  }
  .fileInfo {
    // width: 63.13%;
    overflow: hidden;
    margin-left: 10px;
    .fileName {
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      height: 20px;
      line-height: 20px;
      width: 468px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      @media(max-width:1300px){
        width: 308px;
      }
    }
    .fileName2 {
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      height: 20px;
      line-height: 20px;
      width: 420px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .fileTime {
      font-size: 12px;
      color: rgba(153, 153, 153, 1);
    }
  }
  .checked {
    margin-left: 13.72%;
  }
  .img2_wrap {
    width: 14px;
    height: 14px;
    margin-left: 25px;
    .img2 {
      width: 14px;
      height: 14px;
      display: none;
      cursor: pointer;
    }
  }
}
.RejectFrom {
  width: 525px;
  height: 368px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  position: fixed;
  top: 50%;
  margin-top: -184px;
  left: 50%;
  margin-left: -262px;
  z-index: 9999;
  padding: 40px;
  .title {
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
}
.submitAgainForm {
  width: 525px;
  height: 238px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  position: fixed;
  z-index: 9999;
  top: 50%;
  margin-top: -119px;
  left: 50%;
  margin-left: -262px;
  padding: 50px 102px;
  .content {
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 32px;
    height: 64px;
    margin-bottom: 34px;
    text-align: center;
  }
}
.mt40{
  margin-top:40px;
}

.mt30{
  margin-top:30px;
}
.mt25{
  margin-top:25px;
}
.mt20{
  margin-top:20px;
}
.mt15{
  margin-top:15px;
}
.mt10{
  margin-top:10px;
}
.pt30{
  padding-top:30px;
}
.pt20{
  padding-top:20px;
}
.pl30{
  padding-left:30px;
}
.pl25{
  padding-left:25px;
}
.pr20{
  padding-right:20px;
}
.pb30{
  padding-bottom: 30px;
}
.pb15{
  padding-bottom: 15px;
}
.ml40{
  margin-left:40px;
}
.ml35{
  margin-left:35px;
}
.ml10{
  margin-left:10px;
}
.ml20{
  margin-left:20px;
}
.ml25{
  margin-left:25px;
}
.ml15{
  margin-left:15px;
}
.ml30{
  margin-left:30px;
}
.mr30{
  margin-right:30px;
}
.pd30{
  padding:30px;
}
.pd10{
  padding:10px;
}
.mainFoot {
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.05);
      position: absolute;
      left:50%;
      margin-left:-650px;
      bottom: 0;
      height: 76px;
      width: 1300px;
      .rejectReason {
        width: 55.38%;
        height: 80px;
        padding: 0 30px;
        background: #fff0f1;
        bottom: 76px;
        position: absolute;
        .submitAgain {
          width: 88px;
          height: 35px;
          background: #53b4b3;
          border-radius: 4px;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          line-height: 35px;
        }
      }
      .footLeft {
        width: 55.38%;
        height: 100%;

        overflow: hidden;
        .sureBtn {
          width: 110px;
          font-size: 16px;
          margin-left: 0;
        }
        .checkFiles {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #53b4b3;
          margin-left: 40px;
          cursor: pointer;
        }
        .submiter {
          min-width: 62px;
          margin-left: 7px;
          .avatar2 {
            margin-left: 8px;
          }
          .submitTime {
            font-size: 10px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            margin-top: 5px;
          }
        }
        .checkArea_wrap {
          width: 240px;
          height: 58px;
          overflow: hidden;
          margin-left: 12px;
          margin-right: 12px;
          .checkArea {
            width: 240px; // margin-left:12px;
            // margin-right:12px;
            overflow: hidden;
            height: 58px;
            .checkItem {
              width: 45px;
              margin-right: 20px;
              position: relative;
              height: 58px;
              &:nth-last-child(1) {
                margin-right: 0px;
              }
              img {
                width: 45px;
                height: 45px;
              }
            }
          }
        }
      }
      .footRight {
        height: 100%;
        width: 44.62%;
        border-left: 1px solid #eee;
        padding: 0 30px;
      }
    }
//     @media (min-width: 1800px) {
//   .main {
//     height: calc(100% - 110px) !important;
//   }
//   .mainFoot {
//     height: 100px !important;
//   }
//   .rejectReason {
//     bottom: 100px !important;
//   }
// }
@media (max-width: 1300px) {
  .mainFoot {
    width: 1000px !important;
    margin-left:-500px !important;
  }
  .container_wrap{
    width: 1000px;
    min-width: 795px;
  }
}
@media (max-width: 1000px) {
  .mainFoot {
    margin-left:0px !important;
    left:0 !important;
  }
}
.footRight2{
  width:100%;
  height: 76px;
  position: absolute;
  bottom:0;
  left:0;
  background:#fff;
  box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 0 30px;
}
</style>

<template>
  <div class="container">
    <div class="container_wrap">
      <div class="header flex align-center justify-between">
        <img v-if="detail.archivingFlag==1" class="archiveImg" src="../../assets/images/pigeonhole.png" alt>
        <img v-if="detail.archivingFlag==0&&detail.completionFlag==1" class="archiveImg" src="../../assets/images/complete.png" alt>
        <div class="flex align-center">
          <div v-if="detail.archivingFlag==1">
            <div v-if="degree === 1" class="degree degree1">Low</div>
            <div v-if="degree === 2" class="degree degree2">Middle</div>
            <div v-if="degree === 3" class="degree degree3">High</div>
          </div>
          <div v-else>
            <el-dropdown placement="bottom-start">
              <div v-if="degree === 1" class="degree degree1">Low</div>
              <div v-if="degree === 2" v-waves class="degree degree2">Middle</div>
              <div v-if="degree === 3" class="degree degree3">High</div>
              <el-dropdown-menu slot="dropdown" class="dropdown1">
                <div @click="selectDegree(3)">
                  <el-dropdown-item>High</el-dropdown-item>
                </div>
                <div @click="selectDegree(2)">
                  <el-dropdown-item>Middle</el-dropdown-item>
                </div>
                <div @click="selectDegree(1)">
                  <el-dropdown-item>Low</el-dropdown-item>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="productName">{{ detail.name }}</div>
        </div>
        <!-- <div v-if="detail.archivingFlag==1" class="flex">
          <div v-if="publicValue === 1" class="flex align-center">
            <img src="../../assets/images/lock4.png" alt>
            <div class="ml10 Font666">所有人可见</div>
          </div>
          <div v-if="publicValue === 0" class="flex align-center">
            <img src="../../assets/images/lock3.png" alt>
            <div class="ml10 Font666">项目参与人可见</div>
          </div>
        </div> -->
        <div class="flex align-center">
          <div v-if="detail.archivingFlag==0&&detail.completionFlag==0">
            <div v-if="publicValue === 1" class="flex align-center pointer bghover" style="border-radius:4px;padding:5px;" @click="selectPublic(1)">
              <img src="../../assets/images/lock4.png" alt>
              <div class="ml10 Font666">所有人可见</div>
            </div>
            <div v-if="publicValue === 0" class="flex align-center pointer bghover" @click="selectPublic(0)">
              <img src="../../assets/images/lock3.png" alt>
              <div class="ml10 Font666">项目参与人可见</div>
            </div>
          </div>
          <div v-if="detail.archivingFlag==0" class="more_icon ml35">
            <el-dropdown placement="bottom-start" trigger="click">
              <div>
                <img class="more-nohover" src="../../assets/images/more.png" alt>
                <img class="more-hover" src="../../assets/images/more2.png" alt>
              </div>
              <el-dropdown-menu slot="dropdown" class="dropdown2">
                <div @click="selectPublic(2)">
                  <el-dropdown-item>
                    <div class="flex align-center">
                      <img src="../../assets/images/record.png" alt>
                      <div>归档项目</div>
                    </div>
                  </el-dropdown-item>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
      <div class="main flex" :style="{height:detail.completionFlag==1||detail.archivingFlag === 1?'calc(100% - 109px)':'calc(100% - 185px)'}">
        <div class="mainLeft">
          <vue-scroll>
            <div class="pd30" style="padding-top:10px;">

              <div class="period flex align-center" :style="{marginTop:detail.archivingFlag==1?'10px':''}">
                <img src="../../assets/images/period.png" alt>
                <div class="Font666 ml10" style="margin-right:55px;">项目周期</div>
                <el-date-picker
                  v-if="detail.archivingFlag==0"
                  v-model="startTime"
                  type="date"
                  value-format="yyyy.MM.dd"
                  placeholder="开始日期"
                  :picker-options="pickerOptions0"
                  @change="handleChange"
                />

                <div
                  v-if="detail.archivingFlag==1"
                  :class="detail.startDateStr==''?'Font999 ml30':'Font333 ml30'"
                  style="margin-right:55px"
                >{{ detail.startDateStr==''?'开始日期':detail.startDateStr }}</div>
                <div class="Font333">至</div>
                <el-date-picker
                  v-if="detail.archivingFlag==0"
                  v-model="endTime"
                  type="date"
                  value-format="yyyy.MM.dd"
                  placeholder="结束日期"
                  :picker-options="pickerOptions1"
                  @change="handleChange2"
                />

                <div
                  v-if="detail.archivingFlag==1"
                  :class="detail.startDateStr==''?'Font999':'Font333'"
                  style="margin-left:65px;"
                >{{ detail.endDateStr==''?'结束日期':detail.endDateStr }}</div>
              </div>
              <div class="nowLink flex align-center">
                <img src="../../assets/images/nowLink.png" alt>
                <div class="Font666 nowLink_txt">当前环节</div>
                <div class="Font333 nowLink_value">{{ detail.currStepName }}</div>
                <div class="tag">{{ detail.completionFlag==0?'进行中':'已结束' }}</div>
              </div>
              <div class="childTask flex align-center">
                <img src="../../assets/images/childTask.png" alt>
                <div class="Font666 ml10" style="margin-right:55px;">子任务（{{ childTaskNum }}）</div>
              </div>
              <div ref="childTask2" class="childTask2">
                <div
                  v-for="(item, index) in childTaskList"
                  :key="index"
                  class="taskItem flex justify-between"
                >
                  <div class="taskItem1 Font333">
                    {{ item.name }}
                  </div>
                  <div v-if="detail.archivingFlag==1" class="taskItem2 flex align-center">
                    <img
                      v-if="item.executorId === 'null'"
                      class="default_avatar"
                      src="../../assets/images/default.png"
                      alt
                    >
                    <div v-else class="taskHead">{{ item.nickname }}</div>
                  </div>
                  <div v-if="detail.archivingFlag==0" class="taskItem2 flex align-center" style="width:64px;">
                    <el-popover v-model="item.visible" placement="right" trigger="click">
                      <div class="fromJoiner">
                        <el-input
                          v-model="keyword"
                          placeholder="搜索成员"
                          suffix-icon="el-icon-search"
                          @keyup.native.enter="searchPerson"
                        />
                        <div class="selectWrap mt10">
                          <div
                            v-for="(sub, subIndex) in joiner"
                            :key="subIndex"
                            class="holdPerson flex align-center justify-between"
                            :style="{
                              background: executorId === sub.id ? '#F6F7FF' : ''
                            }"
                            @click="selectJoiner(index, sub.id, item.id)"
                          >

                            <div class="flex align-center">
                              <img
                                v-if="subIndex==0"
                                style="width:25px;height:25px;"
                                src="../../assets/images/default.png"
                                alt
                              >
                              <div v-else class="avatar">{{ sub.nickname }}</div>
                              <div class="Font666 ml10">{{ sub.name }}</div>
                            </div>
                            <img
                              v-if="executorId === sub.id"
                              src="../../assets/images/right.png"
                              alt
                            >
                          </div>
                        </div>
                        <div
                          class="mt15 flex align-center justify-center"
                          @click="getFromDepart(index)"
                        >
                          <i class="el-icon-plus font10" style="font-weight:600;color:#53B4B3" />
                          <div style="color:#53B4B3;margin-left:5px;cursor:pointer">从部门中获取</div>
                        </div>
                      </div>
                      <div slot="reference">
                        <img
                          v-if="item.executorId === 'null'"

                          class="default_avatar"
                          src="../../assets/images/default.png"
                          alt
                        >
                        <div v-else class="taskHead">
                          {{ item.nickname }}
                        </div>
                      </div>
                    </el-popover>
                    <img
                      class="noShow"
                      src="../../assets/images/delete3.png"
                      alt
                      @click="delTask(item.id)"
                    >
                  </div>
                </div>
                <div
                  v-if="preAddTask&&detail.archivingFlag === 0"
                  class="childTask_input flex justify-between align-center"
                  :style="{marginTop:childTaskList.length>0?'7px':'0'}"
                >
                  <div class="input_wrap">
                    <input v-model="childTaskName" type="text" placeholder="请输入子任务名称">
                  </div>
                  <div class="taskItem2 flex align-center">
                    <img class="default_avatar" src="../../assets/images/default.png" alt>
                    <img class="noShow" style="opacity:0;" src="../../assets/images/delete3.png" alt>
                  </div>
                </div>
                <div
                  v-if="!preAddTask&&detail.archivingFlag === 0"
                  class="addChildTask flex align-center"
                  :style="{marginTop:childTaskList.length>0?'14px':'0'}"
                  @click="addTask"
                >
                  <i class="el-icon-plus font10" style="font-weight:600;color:#53B4B3" />
                  <div>添加子任务</div>
                </div>
                <div v-if="preAddTask&&detail.archivingFlag === 0" class="preAddTask mt10">
                  <div class="preAddTask_wrap flex align-center">
                    <div class="sureAddBtn sureBtn" @click="saveChildTask">保存</div>
                    <div class="cancelAddBtn Font999" @click="cancelAddTask">取消</div>
                  </div>
                </div>
              </div>
              <div class="mt25 flex align-center">
                <img src="../../assets/images/related.png" alt>
                <div class="Font666 ml10" style="margin-right:55px;">关联资料（{{ materialsNum }}）</div>
              </div>
              <div class="relatedData">
                <el-upload
                  v-if="detail.archivingFlag === 0"
                  ref="upload"
                  class="upload-demo"
                  action="https://upload.qiniup.com"
                  :data="qiniuData"
                  :file-list="fileList"
                  list-type="text"
                  :on-success="handleSuccess"
                  :before-upload="beforeUpload"
                  :show-file-list="showfilelist"
                  multiple
                >
                  <div class="addData flex align-center">
                    <i class="el-icon-plus font10" style="font-weight:600;color:#53B4B3" />
                    <div @click="showfilelist = true">添加资料</div>
                  </div>
                </el-upload>
                <div
                  v-for="(item, index) in detail.materials"
                  :key="index"
                  class="dataList flex align-center justify-between"
                >
                  <div class="dataList1 flex align-center justify-between">
                    <div
                      class="flex align-center"
                      style="cursor:pointer"
                      @click="
                        openFile(item.fileExt, item.fileUrl, item.name, item.fileSize)
                      "
                    >
                      <img :src="item.iconUrl" alt>
                      <!-- <img src="../../assets/images/files.png" alt> -->
                      <div class="fileInfo">
                        <div class="fileName Font333">{{ item.name }}</div>
                        <div class="fileTime">{{ item.fileSizeStr }} {{ item.creatorName }} {{ item.createTimeStr }}</div>
                      </div>
                    </div>
                    <div style="opacity:0" class="checked Font999">已审核</div>
                  </div>
                  <div class="dataList2 flex align-center">
                    <img
                      v-if="item.approvalMaterialFlag===1"
                      class="img1 pointer"
                      src="../../assets/images/check.png"
                      alt
                      @click="markMaterial2(item.id)"
                    >
                    <el-tooltip content="将该资料放进审核资料中" placement="top">
                      <img
                        v-if="item.approvalMaterialFlag===0"
                        class="img1 pointer"
                        src="../../assets/images/check2.png"
                        alt
                        @click="markMaterial(item.id)"
                      >
                    </el-tooltip>
                    <div class="img2_wrap">
                      <img
                        class="img2"
                        src="../../assets/images/delete3.png"
                        alt
                        @click="delData(item.id)"
                      >
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </vue-scroll>
        </div>
        <div class="mainright">
          <div class="Font33 pt20 pl30">项目参与人（{{ joinerNum }}）</div>
          <div ref="joinerArea" class="joinerArea mt15 pl30 flex flex-wrap">
            <div v-for="(item, index) in joiner.slice(1,maxLength+1)" :key="index" class="avatar">
              <el-tooltip class="item" effect="dark" content="item.name" placement="top">
                <div slot="content">{{ item.name }}</div>
                <div class="avatar">

                  {{ item.nickname }}

                </div>
              </el-tooltip>
            </div>
            <el-popover
              v-if="detail.archivingFlag!==1&&detail.completionFlag!==1"
              v-model="addPanel"
              placement="bottom"
              trigger="click"
            >
              <div v-if="executorsBySteps.length>0" class="addPanel flex">
                <div class="panelLeft">
                  <div
                    v-for="(item, index) in executorsBySteps"
                    :key="item.id"
                    v-waves
                    :class="index === stepIndex ? 'panleftItem2' : 'panleftItem'"
                    @click="selectStep(index)"
                  >{{ item.name }}</div>
                </div>
                <div class="panelRight pb15">
                  <div class="Font999 mt25 ml25">{{ executorsBySteps[stepIndex].name }}成员</div>
                  <div
                    class="flex align-center mt15 ml25"
                    style="margin-bottom:7px;"
                    @click="addMember"
                  >
                    <img class="pointer transBig" src="../../assets/images/icon_add.png" alt>
                    <div class="FontP pointer ml10">添加成员</div>
                  </div>
                  <div
                    v-for="item in executorsBySteps[stepIndex].executors"
                    :key="item.id"
                    class="executorItem pl25 pr20 flex align-center justify-between"
                  >
                    <div class="flex align-center">
                      <div class="avatar">{{ item.nickname }}</div>
                      <div class="ml10 Font666">{{ item.name }}</div>
                      <div v-if="!item.canDelete" class="defaultM">默认成员</div>
                    </div>
                    <img
                      v-if="item.canDelete"
                      class="pointer"
                      src="../../assets/images/delete3.png"
                      alt
                      @click="delExecutor(item.id)"
                    >
                  </div>
                  <div class="Font999 ml25" style="margin-top:17px;">审批成员</div>
                  <div
                    v-for="(item, index) in executorsBySteps[stepIndex].approvers"
                    :key="index"
                    class="flex align-center mt15 ml25"
                  >
                    <div class="avatar">{{ item.nickname }}</div>
                    <div class="ml10 Font666">{{ item.name }}</div>
                  </div>
                </div>
              </div>
              <div slot="reference" @click="filterNowStep">
                <img v-if="joiner.length<(maxLength+1)" class="transBig" src="../../assets/images/add2.png" alt>
                <img v-else class="loadMore transBig" src="../../assets/images/add.png" alt>
              </div>

            </el-popover>
            <!-- <img v-if="joiner.length>maxLength&&!showMore" class="loadMore transBig" src="../../assets/images/add.png" alt @click="loadMoreJoiner"> -->
          </div>

          <div id="gundong" ref="gundong" class="projectNews" :style="newsHeight">
            <img v-if="showLoading" class="loading" src="../../assets/images/loading.gif" alt="">
            <vue-scroll ref="vs" @handle-scroll="handleScroll">

              <div class="projectNews_wrap">

                <div v-for="(item, index) in newsList.list" :key="index" class="news">
                  <div v-if="item.type === 1" class="mt25">
                    <div class="flex justify-between">
                      <div class="flex" style="width:calc(100% - 90px)">
                        <img v-if="item.content.indexOf('修改了')>-1||item.content.indexOf('添加了项目参与人')>-1||item.content.indexOf('环节流转')>-1||item.content.indexOf('删除了项目参与人')>-1" src="../../assets/images/edit.png" alt="" style="width:18px;height:18px">
                        <img v-if="item.content.indexOf('时间')>-1" src="../../assets/images/period.png" alt="" style="width:18px;height:18px">
                        <img v-if="item.content.indexOf('子任务')>-1" src="../../assets/images/childTask.png" alt="" style="width:18px;height:18px">
                        <img v-if="item.content.indexOf('添加了资料')>-1||item.content.indexOf('删除了资料')>-1" src="../../assets/images/related.png" alt="" style="width:18px;height:18px">
                        <img v-if="item.content.indexOf('发起了项目')>-1||item.content.indexOf('项目进入')>-1||item.content.indexOf('项目完成')>-1||item.content.indexOf('归档了本项目')>-1" src="../../assets/images/nowLink.png" alt="" style="width:18px;height:18px">
                        <div class="Font333 ellipsis ml20" style="width:calc(100% - 38px)">{{ item.content }}</div>
                      </div>
                      <div class="Font666">{{ item.createTimeStr }}</div>
                    </div>
                    <div v-if="item.related.length > 0">
                      <div
                        v-for="(sub, subIndex) in item.related"
                        :key="subIndex"
                        class="FontP mt10 pointer"
                        style="margin-left:38px;"
                        @click="openFileFromData(sub.relatedId)"
                      >{{ sub.relatedName }}</div>
                    </div>
                  </div>
                  <div v-if="item.type === 2" class="mt25">
                    <div class="flex align-center justify-between">
                      <div class="leftPart flex align-center">
                        <div class="avatar">{{ item.nickname }}</div>
                        <div class="ml15 Font666">{{ item.memName }}</div>
                      </div>
                      <div class="Font666">{{ item.createTimeStr }}</div>
                    </div>
                    <div class="Font333 ml40 mt10">{{ item.content }}</div>
                  </div>
                </div>

              </div>
            </vue-scroll>
          </div>

          <div v-if="detail.completionFlag==1&&detail.archivingFlag!==1" class="footRight2 flex justify-between align-center">
            <at v-model="inputcontent" :members="joiner2" @enterSend="send" @toFatherID="aiTeID">
              <input type="text" placeholder="@提及他人，发送消息">
            </at>
            <img v-if="inputcontent === ''" class="pointer" src="../../assets/images/send.png" alt>
            <img
              v-if="inputcontent !== ''"
              class="pointer"
              src="../../assets/images/send2.png"
              alt
              @click="send"
            >
          </div>

        </div>

      </div>
      <div v-if="selectForm1 || selectForm2 ||showRejectFrom||ShowSubmitAgain" class="mask" />
      <div v-if="showRejectFrom" class="RejectFrom">
        <div class="title">驳回理由</div>
        <el-input
          v-model="reason"
          type="textarea"
          class="textarea mt20"
          rows="7"
          placeholder="请输入驳回理由"
        />
        <div class="flex justify-center mt40">
          <div class="cancelBtn" @click="cancelReject">取消</div>
          <div class="sureBtn" @click="sureReject">确认</div>
        </div>
      </div>
      <!-- 组织架构中选择成员 -->
      <div v-if="selectForm1 || selectForm2" class="selectForm1">
        <div class="selectForm1_wrap flex justify-between">
          <div class="selectForm1_left">
            <div class="selectForm1_title">添加成员</div>
            <el-input v-model="filterText" placeholder="搜索成员" />
            <el-tree
              ref="tree"
              class="filter-tree"
              :data="memberStructures"
              :props="defaultProps"
              accordion
              show-checkbox
              highlight-current
              :filter-node-method="filterNode"
              style="border:1px solid #EBEEF5;padding:5px;height:290px;margin-top:8px;overflow-y:auto"
              @check-change="treeCheck"
            />
          </div>
          <div class="selectForm1_left">
            <div class="selectForm1_title">已选成员</div>
            <div class="selected_box">
              <div class="table-responsive" style="margin-top:-2px">
                <el-table :data="selectedMember" style="width: 100%">
                  <el-table-column label="姓名">
                    <template slot-scope="scope">{{ scope.row.name }}</template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <i class="el-icon-delete" @click="delSelectId(scope.row.id)" />
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>

          <div class="select_footer flex justify-center">
            <div class="cancelBtn" @click="cancelSelect">取消</div>
            <div class="sureBtn" @click="sureSelect">确认</div>
          </div>
        </div>
      </div>
      <!-- 组织架构中选择成员 -->

      <!-- 确认是否再次提审 -->

      <div v-if="ShowSubmitAgain" class="submitAgainForm">
        <div class="content">
          确认是否依照驳回理由已完善审核条
          <br>件，申请进行再次审核
        </div>
        <div class="flex justify-center">
          <div class="cancelBtn" @click="ShowSubmitAgain = false">取 消</div>
          <div class="sureBtn" @click="sureSubmit">确 定</div>
        </div>
      </div>
    </div>
    <!-- 存在底部bar -->
    <div v-if="detail.archivingFlag === 0&&detail.completionFlag!==1" class="mainFoot flex align-center" :style="{flexDirection: detail.completionFlag==1?'row-reverse':'row'}">
      <div
        v-if="checkInfo.currStepStatus===3&&checkInfo.canOp"
        class="rejectReason flex align-center justify-between"
      >
        <div class="flex align-center">
          <img src="../../assets/images/notice.png" alt>
          <div class="Font666 ml10">{{ checkInfo.rejectReason==''?'审核被驳回':checkInfo.rejectReason }}</div>
        </div>
        <div class="submitAgain pointer" @click="submitAgain">重新申请</div>
      </div>
      <div class="footLeft flex align-center">
        <!-- 未提交审核 -->
        <div
          v-if="checkInfo.currStepStatus === 1"
          class="flex align-center justify-center"
          style="width:100%;height:100%;"
        >
          <div class="sureBtn" @click="startGo">流转</div>

          <el-popover placement="top-start" trigger="click">
            <div class="files_area">
              <vue-scroll>
                <div class="flex align-center filesArea_head">
                  <div class="Font333 font16">审核资料（{{ currMaterials_arr.length }}）</div>
                  <el-upload
                    v-if="checkInfo.canOp"
                    ref="upload"
                    class="upload-demo"
                    action="https://upload.qiniup.com"
                    :data="qiniuData"
                    :file-list="fileList2"
                    :on-success="handleSuccess2"
                    :before-upload="beforeUpload"
                    multiple
                  >
                    <div class="upload">本地上传</div>
                  </el-upload>
                </div>
                <div
                  v-for="(item, index) in currMaterials_arr"
                  :key="index"
                  class="dataList flex align-center justify-between"
                >
                  <div class="dataList1 ml10 mt10" style="width:100%">
                    <div
                      class="flex align-center justify-between pr20"
                      style="cursor:pointer"
                      @click="
                        openFile(item.fileExt, item.fileUrl, item.name, item.fileSize)
                      "
                    >
                      <div class="flex align-center">
                        <!-- <img :src="item.iconUrl" alt> -->
                        <img src="../../assets/images/files.png" alt>
                        <div class="fileInfo">
                          <div class="fileName2 Font333">{{ item.name }}</div>
                          <div
                            class="fileTime"
                          >{{ item.fileSizeStr }} {{ item.creatorName }} {{ item.createTimeStr }}</div>
                        </div>
                      </div>
                      <div class="bghover2 Font666" @click.stop="delData2(item.id)">移除</div>
                    </div>
                  </div>
                </div>
              </vue-scroll>
            </div>
            <div slot="reference" class="checkFiles bghover2">审核资料({{ currMaterials_arr.length }})</div>
          </el-popover>
        </div>
        <!-- 审核中 -->
        <div v-if="checkInfo.currStepStatus === 2" class="flex align-center">
          <div class="Font666 font18 ml30">提审</div>
          <div class="flex flex-column justify-between submiter">
            <div class="avatar2">{{ checkInfo.submitterName }}</div>
            <div class="submitTime">{{ checkInfo.submitTimeStr }}</div>
          </div>
          <div class="Font666 font18 ml30" style="margin-left:40px;">审核</div>
          <div
            v-if="checkInfo.approvalNodes.length > 4"
            class="ml15"
            style="width:18px;height:26px;"
          >
            <img
              v-if="!hideLeft"
              class="pointer"
              src="../../assets/images/left1.png"
              alt
              @click="pullLeft"
            >
          </div>
          <div class="checkArea_wrap">
            <div ref="checkArea" class="checkArea flex align-center">
              <div
                v-for="(item, index) in approvalNodes"
                :key="index"
                class="checkItem"
              >
                <div
                  class="avatar2"
                >{{ item.approvers[0].name }}</div>
                <div v-if="item.status === 2" class="status2">待审</div>
                <div v-if="item.status === 3" class="status3">通过</div>
                <div v-if="item.status === 4" class="status4">驳回</div>
              </div>
            </div>
          </div>
          <div v-if="checkInfo.approvalNodes.length > 4" style="width:18px;height:26px;">
            <img
              v-if="!hideRight"
              class="pointer"
              src="../../assets/images/right1.png"
              alt
              @click="pullRight"
            >
          </div>
          <!-- 判断是否有审核权限 -->
          <el-popover v-model="showFileArea2" placement="top-start" trigger="click">
            <div class="files_area">
              <vue-scroll>
                <div class="flex align-center filesArea_head">
                  <div class="Font333 font16">审核资料（{{ currMaterials_arr.length }}）</div>
                  <div v-if="checkInfo.canOp" class="pass pointer" @click="passCheck">通过审核</div>
                  <div v-if="checkInfo.canOp" class="reject pointer ml20" @click="showRejectFrom = true">驳回</div>
                  <i class="el-icon-close font16 ml30 pointer" style="color:#999" @click="showFileArea2 = false" />
                </div>
                <div
                  v-for="(item, index) in currMaterials_arr"
                  :key="index"
                  class="dataList flex align-center justify-between"
                >
                  <div class="dataList1 ml10 mt10" style="width:100%">
                    <div
                      class="flex align-center"
                      style="cursor:pointer"
                      @click="
                        openFile(item.fileExt, item.fileUrl, item.name, item.fileSize)
                      "
                    >
                      <img src="../../assets/images/files.png" alt>
                      <div class="fileInfo">
                        <div class="fileName2 Font333">{{ item.name }}</div>
                        <div
                          class="fileTime"
                        >{{ item.fileSizeStr }} {{ item.creatorName }} {{ item.createTimeStr }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </vue-scroll>
            </div>
            <div slot="reference">
              <div v-if="checkInfo.canOp" class="checkFiles_btn">审核</div>
              <div v-if="!checkInfo.canOp" class="checkFiles bghover2">审核资料（{{ currMaterials_arr.length }}）</div>
            </div>
          </el-popover>
          <!-- 判断是否有审核权限 -->

        </div>
        <!-- 审核驳回 -->
        <div v-if="checkInfo.currStepStatus === 3" class="flex align-center justify-between">
          <div class="Font666 font18 ml30">提审</div>
          <div class="flex flex-column justify-between submiter">
            <div class="avatar2">{{ checkInfo.submitterName }}</div>
            <div class="submitTime">{{ checkInfo.submitTimeStr }}</div>
          </div>
          <div class="Font666 font18 ml30" style="margin-left:40px;">审核</div>
          <div
            v-if="checkInfo.approvalNodes.length > 4"
            class="ml15"
            style="width:18px;height:26px;"
          >
            <img
              v-if="!hideLeft"
              class="pointer"
              src="../../assets/images/left1.png"
              alt
              @click="pullLeft"
            >
          </div>
          <div class="checkArea_wrap">
            <div ref="checkArea" class="checkArea flex align-center">
              <div
                v-for="(item, index) in approvalNodes"

                :key="index"
                class="checkItem"
              >
                <div
                  class="avatar2"
                >{{ item.approvers[0].name }}</div>
                <div v-if="item.status === 2" class="status2">待审</div>
                <div v-if="item.status === 3" class="status3">通过</div>
                <div v-if="item.status === 4" class="status4">驳回</div>
              </div>
            </div>
          </div>
          <div v-if="checkInfo.approvalNodes.length > 4" style="width:18px;height:26px;">
            <img
              v-if="!hideRight"
              class="pointer"
              src="../../assets/images/right1.png"
              alt
              @click="pullRight"
            >
          </div>

          <el-popover v-model="showFileArea3" placement="top-start" trigger="click">
            <div class="files_area">
              <vue-scroll>
                <div class="flex align-center filesArea_head">
                  <div class="Font333 font16">审核资料（{{ currMaterials_arr.length }}）</div>
                  <el-upload
                    v-if="checkInfo.canOp"
                    ref="upload"
                    class="upload-demo"
                    action="https://upload.qiniup.com"
                    :data="qiniuData"
                    :file-list="fileList2"
                    :on-success="handleSuccess2"
                    :before-upload="beforeUpload"
                    multiple
                  >
                    <div class="upload bghover2">本地上传</div>
                  </el-upload>

                  <i
                    class="el-icon-close font16 pointer"
                    style="color:#999"
                    @click="showFileArea3 = false"
                  />
                </div>
                <div
                  v-for="(item, index) in currMaterials_arr"
                  :key="index"
                  class="dataList flex align-center justify-between"
                >
                  <div class="dataList1 ml10 mt10" style="width:100%">
                    <div
                      class="flex align-center justify-between pr20"
                      style="cursor:pointer"
                      @click="
                        openFile(item.fileExt, item.fileUrl, item.name, item.fileSize)
                      "
                    >
                      <div class="flex align-center">
                        <img src="../../assets/images/files.png" alt>
                        <div class="fileInfo">
                          <div class="fileName2 Font333">{{ item.name }}</div>
                          <div
                            class="fileTime"
                          >{{ item.fileSizeStr }} {{ item.creatorName }} {{ item.createTimeStr }}</div>
                        </div>
                      </div>
                      <div class="bghover2 Font666" @click.stop="delData2(item.id)">移除</div>
                    </div>
                  </div>
                </div>
              </vue-scroll>
            </div>
            <div slot="reference" class="checkFiles bghover2">编辑审核资料({{ currMaterials_arr.length }})</div>
          </el-popover>
        </div>
      </div>
      <div class="footRight flex justify-between align-center">
        <at v-model="inputcontent" :members="joiner2" @enterSend="send" @toFatherID="aiTeID">
          <input type="text" placeholder="@提及他人，发送消息">
        </at>
        <img v-if="inputcontent === ''" class="pointer" src="../../assets/images/send.png" alt>
        <img
          v-if="inputcontent !== ''"
          class="pointer"
          src="../../assets/images/send2.png"
          alt
          @click="send"
        >
      </div>
    </div>

    <!-- 项目完成时，底部bar只有聊天框 -->
    <!-- <div v-if="detail.completionFlag==1">
      <div class="footRight2 flex justify-between align-center">
        <at v-model="inputcontent" :members="joiner2" @enterSend="send" @toFatherID="aiTeID">
          <input type="text" placeholder="@提及他人，发送消息">
        </at>
        <img v-if="inputcontent === ''" class="pointer" src="../../assets/images/send.png" alt>
        <img
          v-if="inputcontent !== ''"
          class="pointer"
          src="../../assets/images/send2.png"
          alt
          @click="send"
        >
      </div>
    </div> -->
  </div>
</template>

<script>
import waves from '@/directives/waves'
import {
  projectDetail,
  updateStartTime,
  updateEndTime,
  updateDegree,
  updatePublic,
  archive,
  addTask,
  taskList,
  setExecutor,
  delTask,
  getParticipants,
  getbySteps,
  addExecutors,
  delExecutors,
  addMaterials,
  materialsList,
  delMaterials,
  postMessage,
  getNews,
  getCheckInfo,
  submitCheck,
  agreeCheck,
  rejectCheck,
  currMaterials,
  addApprData,
  delApprData,
  markMaterials
} from '../../api/project'
import { memberStructures } from '../../api/organization'
import { uploadStrategy } from '../../api/common'
import at from '../../components/atuser'
export default {
  components: {
    at
  },
  directives: {
    waves
  },
  data() {
    return {
      showRejectFrom: false,
      ShowSubmitAgain: false,
      reason: '',
      degree: 1,
      inputcontent: '',
      publicValue: 1,
      moreValue: 1,
      startTime: '',
      endTime: '',
      productId: '',
      detail: '',
      childTaskList: [],
      preAddTask: false,
      pre_headID: '',
      keyword: '',
      joiner: [],
      joiner2: [],
      joiner3: [],
      childTaskName: '',
      executorId: '',
      visible: false,
      selectForm1: false,
      selectForm2: false,
      memberStructures: [],
      filterText: '',
      showfilelist: true,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      selectedMember: [],
      markIndex: 0,
      strategy: [],
      limit: 1,
      qiniuData: {
        token: '',
        key: ''
      },
      materialsParam: [],
      uniqueNum: 0,
      newsParam: {
        pageNo: 1,
        pageSize: 10,
        localLatestTrendId: ''
      },
      newsList: '',
      atArr: [],
      atMemberIds: [],
      addPanel: false,
      executorsBySteps: [],
      stepIndex: 0,
      childTaskNum: 0,
      materialsNum: 0,
      joinerNum: 0,
      checkInfo: '',
      hideRight: false,
      hideLeft: true,
      showFileArea: false,
      showFileArea2: false,
      showFileArea3: false,
      currMaterials_arr: [],
      newsHeight: {
        height: 'calc(100% - 95px)'
      },
      showMore: false,
      maxLength: 11,
      showLoading: false,
      pickerOptions0: {
        disabledDate: (time) => {
          if (this.endTime !== '') {
            return time.getTime() > new Date(this.endTime).getTime()
          }
        }
      },
      pickerOptions1: {
        disabledDate: (time) => {
          if (this.startTime !== '') {
            return time.getTime() < new Date(this.startTime).getTime()
          }
        }
      },
      fileList: [],
      fileList2: [],
      approvalNodes: []
    }
  },
  computed: {
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    },
    checkInfo: {
      handler() {
        if (this.detail !== '' && this.detail.completionFlag !== 1 && this.detail.archivingFlag !== 1) {
          const xx = JSON.stringify(this.checkInfo.approvalNodes)
          const approvalNodes = JSON.parse(xx)
          for (let i = 0; i < approvalNodes.length; i++) {
            if (approvalNodes[i].approvers.length > 1) {
              for (let x = 0; x < approvalNodes[i].approvers.length; x++) {
                if (approvalNodes[i].approvers[x].status === -1 || approvalNodes[i].approvers[x].status === 1) {
                  approvalNodes[i].approvers = [approvalNodes[i].approvers[x]]
                }
              }
            }
          }
          this.approvalNodes = approvalNodes
        }
      },
      deep: true
    }
  },
  created() {
    this.productId = this.$route.query.id
    this.getDetail()
    this.getTaskList()
    this.getJoiner()
    this.getJoiner2()
    this.getStrategy()
    this.getNews()
    this.getExecutors()
    this.getCheckInfo()
    this.getCurrMaterials()
    const clientWidth = document.body.clientWidth
    if (clientWidth > 1300) {
      this.maxLength = 11
    } else {
      this.maxLength = 8
      this.showMore = false
    }

    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        if (window.screenWidth > 1300) {
          that.maxLength = 11
        } else {
          that.maxLength = 8
          that.showMore = false
        }
      })()
    }
  },
  methods: {
    filterNowStep() {
      for (let i = 0; i < this.executorsBySteps.length; i++) {
        if (this.detail.currStepId === this.executorsBySteps[i].id) {
          this.stepIndex = i
        }
      }
    },
    handleScroll(vertical) {
      if (vertical.scrollTop === 0) {
        // 触顶加载更多

        this.loadMore()
      }
    },
    loadMoreJoiner() {
      this.maxLength = 999
      this.showMore = true
      setTimeout(() => {
        const height = this.$refs.joinerArea.offsetHeight
        const xx = 38 + height
        this.$set(this.newsHeight, 'height', 'calc(100% - ' + xx + 'px)')
      }, 500)
    },
    // 确认再次申请
    sureSubmit() {
      submitCheck(this.productId, this.detail.currNodeId).then(() => {
        this.$notify({
          title: '成功',
          message: '已重新申请',
          type: 'success'
        })
        this.getDetail()
        this.ShowSubmitAgain = false
        this.getCheckInfo()
        this.getNews(scrollTo)
      })
    },
    // 重新申请
    submitAgain() {
      this.ShowSubmitAgain = true
    },
    // 取消驳回
    cancelReject() {
      this.reason = ''
      this.showRejectFrom = false
      this.showFileArea2 = false
    },
    // 审核驳回
    sureReject() {
      this.showFileArea2 = false
      const param = {
        reason: this.reason
      }
      rejectCheck(param, this.productId, this.checkInfo.currNodeId).then(
        res => {
          this.$notify({
            title: '成功',
            message: '驳回成功',
            type: 'success'
          })
          this.reason = ''
          this.getDetail()
          this.showRejectFrom = false
          this.getCheckInfo()
          this.getNews(scrollTo)
        }
      )
    },
    // 删除审核资料
    delData2(id) {
      delApprData(this.productId, id).then(() => {
        this.$notify({
          title: '',
          message: '移除审核资料成功',
          type: 'success'
        })
        this.getCurrMaterials()
        this.getNews(scrollTo)
      })
    },
    passCheck() {
      this.showFileArea2 = false
      agreeCheck(this.productId, this.checkInfo.currNodeId).then(res => {
        this.$notify({
          title: '成功',
          message: '通过审核',
          type: 'success'
        })
        this.getCurrMaterials()
        this.getDetail()
        this.getCheckInfo()
        this.getNews(scrollTo)
      })
    },
    // 标记为审核资料
    markMaterial(id) {
      markMaterials(this.productId, id).then(() => {
        this.$notify({
          title: '成功',
          message: '标记审核资料成功',
          type: 'success'
        })
        this.getDetail()
        this.getCurrMaterials()
        this.getNews(scrollTo)
      })
    },
    // 取消标记为审核资料
    markMaterial2(id) {
      delApprData(this.productId, id).then(() => {
        this.$notify({
          message: '移除审核资料成功',
          type: 'success'
        })
        this.getDetail()
        this.getCurrMaterials()
        this.getNews(scrollTo)
      })
    },

    // 获取当前审核资料
    getCurrMaterials() {
      currMaterials(this.productId).then(res => {
        this.currMaterials_arr = res
      })
    },
    pullLeft() {
      this.$refs.checkArea.scrollLeft -= 10
      this.hideRight = false
      if (this.$refs.checkArea.scrollLeft < 1) {
        this.hideLeft = true
      } else {
        this.hideLeft = false
      }
    },
    pullRight() {
      this.$refs.checkArea.scrollLeft += 10
      this.hideLeft = false
      if (
        this.$refs.checkArea.scrollLeft + 240 + 3 >
        this.checkInfo.approvalNodes.length * 65 - 20
      ) {
        this.hideRight = true
      } else {
        this.hideRight = false
      }
    },
    // 开始流转
    startGo() {
      submitCheck(this.productId, this.detail.currNodeId).then(() => {
        this.$notify({
          title: '成功',
          message: '申请流程审核成功',
          type: 'success'
        })
        this.getCheckInfo()
        this.getNews(scrollTo)
      })
    },
    // 获取审核信息
    getCheckInfo() {
      getCheckInfo(this.productId).then(res => {
        if (res.approvalNodes) {
          for (let i = 0; i < res.approvalNodes.length; i++) {
            for (let x = 0; x < res.approvalNodes[i].approvers.length; x++) {
              const name = res.approvalNodes[i].approvers[x].name
                .split('')
                .reverse()
              if (name.length === 1) {
                res.approvalNodes[i].approvers[x].nickname = name[0]
              } else {
                res.approvalNodes[i].approvers[x].nickname = name[1] + name[0]
              }
            }
          }
        }

        this.checkInfo = res
      })
    },
    addMember() {
      this.getStructures()
      this.selectForm2 = true
    },
    // 删除项目步骤执行人
    delExecutor(id) {
      const stepId = this.executorsBySteps[this.stepIndex].id
      delExecutors(this.productId, stepId, id).then(() => {
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success'
        })
        this.getExecutors()
        this.getNews(scrollTo)
      })
    },
    // 选择流程
    selectStep(index) {
      this.stepIndex = index
    },
    // 获取各流程环节下的参与人
    getExecutors() {
      getbySteps(this.productId).then(res => {
        for (let i = 0; i < res.length; i++) {
          for (let x = 0; x < res[i].executors.length; x++) {
            if (res[i].executors[x].name.split('').length === 1) {
              res[i].executors[x].nickname = res[i].executors[x].name
            } else {
              const name1 = res[i].executors[x].name.split('').reverse()
              res[i].executors[x].nickname = name1[1] + name1[0]
            }
          }
          for (let x = 0; x < res[i].approvers.length; x++) {
            if (res[i].approvers[x].name.split('').length === 1) {
              res[i].approvers[x].nickname = res[i].approvers[x].name
            } else {
              const name1 = res[i].approvers[x].name.split('').reverse()
              res[i].approvers[x].nickname = name1[1] + name1[0]
            }
          }
        }
        this.executorsBySteps = res
      })
    },
    // 打开添加环节参与人面板
    showAddPanel() {
      // this.getExecutors()
      this.addPanel = true
    },
    // 每次@记录id
    aiTeID(id, name) {
      const obj = {
        id: id,
        name: name
      }
      this.atArr.push(obj)
    },
    send(e) {
      for (let i = 0; i < this.atArr.length; i++) {
        const str = '@' + this.atArr[i].name
        if (this.inputcontent.indexOf(str) === -1) {
          this.atArr.splice(i, 1)
        }
      }
      for (let i = 0; i < this.atArr.length; i++) {
        if (this.atMemberIds.indexOf(this.atArr[i].id) === -1) {
          this.atMemberIds.push(this.atArr[i].id)
        }
      }
      if (this.atMemberIds.indexOf('所有人') > -1) {
        const arr = []
        for (let i = 0; i < this.joiner.length; i++) {
          arr.push(this.joiner[i].id)
        }
        this.atMemberIds = arr
      }
      const param = {
        content: this.inputcontent,
        atMemberIds: this.atMemberIds
      }
      postMessage(param, this.productId).then(res => {
        this.atArr = []
        this.atMemberIds = []
        this.inputcontent = ''
        // const length = this.newsList.list.length
        // this.newsParam.localLatestTrendId = this.newsList.list[length - 1].id
        this.getNews()
      })

      // var div = this.$refs.gundong
      this.$refs['vs'].scrollTo(
        {
          y: 1000000
        },
        500,
        'easeInQuad'
      )
    },
    // 加载更多动态
    loadMore() {
      if (this.newsList.more) {
        this.showLoading = true
        this.newsParam.pageSize += 10
        const length = this.newsList.list.length
        this.newsParam.localLatestTrendId = this.newsList.list[length - 1].id
        // this.getNews()

        getNews(this.newsParam, this.productId).then(res => {
          res.list = res.list.reverse()
          for (let i = 0; i < res.list.length; i++) {
            const name1 = res.list[i].memName.split('').reverse()
            if (name1.length === 0) {
              res.list[i].nickname = name1[0]
            } else {
              res.list[i].nickname = name1[1] + name1[0]
            }
          }
          this.newsList = res
        })

        setTimeout(() => {
          this.showLoading = false
        }, 500)
      }
    },
    // 获取动态
    getNews(scrollTo) {
      this.newsParam.pageSize = 10
      this.newsParam.localLatestTrendId = ''
      getNews(this.newsParam, this.productId).then(res => {
        res.list = res.list.reverse()
        for (let i = 0; i < res.list.length; i++) {
          const name1 = res.list[i].memName.split('').reverse()
          if (name1.length === 0) {
            res.list[i].nickname = name1[0]
          } else {
            res.list[i].nickname = name1[1] + name1[0]
          }
        }
        this.newsList = res
      })
      if (scrollTo) {
        this.$refs['vs'].scrollTo(
          {
            y: 1000000
          },
          500,
          'easeInQuad'
        )
      }
    },
    openFile(fileExt, fileUrl, name, fileSize) {
      if (fileSize === 0) {
        this.$notify({
          title: '提示',
          message: '该文档为空文档',
          type: 'warning'
        })
        return
      }
      if (
        (fileExt === '.pptx' ||
          fileExt === '.ppt' ||
          fileExt === '.docx' ||
          fileExt === '.doc') &&
        fileSize < 10480000
      ) {
        window.open(
          'https://view.officeapps.live.com/op/view.aspx?src=' + fileUrl
        )
      } else if (
        (fileExt === '.xlsx' || fileExt === '.xls') &&
        fileSize < 5120000
      ) {
        window.open(
          'https://view.officeapps.live.com/op/view.aspx?src=' + fileUrl
        )
      } else if (
        (fileExt === '.pptx' ||
          fileExt === '.ppt' ||
          fileExt === '.docx' ||
          fileExt === '.doc') &&
        fileSize > 10480000
      ) {
        this.$notify({
          title: '提示',
          message: '文档体积过大无法预览，即将开始下载',
          type: 'warning'
        })
        setTimeout(() => {
          window.open(fileUrl)
        }, 1500)
      } else if (
        (fileExt === '.xlsx' || fileExt === '.xls') &&
        fileSize > 5120000
      ) {
        this.$notify({
          title: '提示',
          message: '文档体积过大无法预览，即将开始下载',
          type: 'warning'
        })
        setTimeout(() => {
          window.open(fileUrl)
        }, 1500)
      } else {
        window.open(fileUrl)
      }
    },
    openFileFromData(id) {
      var temObj = {}
      for (let i = 0; i < this.detail.materials.length; i++) {
        if (this.detail.materials[i].id === id) {
          temObj = this.detail.materials[i]
        }
      }
      if (temObj.fileSize === 0) {
        this.$notify({
          title: '提示',
          message: '该文档为空文档',
          type: 'warning'
        })
        return
      }
      if (
        (temObj.fileExt === '.pptx' ||
          temObj.fileExt === '.ppt' ||
          temObj.fileExt === '.docx' ||
          temObj.fileExt === '.doc') &&
        temObj.fileSize < 10480000
      ) {
        window.open(
          'https://view.officeapps.live.com/op/view.aspx?src=' + temObj.fileUrl
        )
      } else if (
        (temObj.fileExt === '.xlsx' || temObj.fileExt === '.xls') &&
        temObj.fileSize < 5120000
      ) {
        window.open(
          'https://view.officeapps.live.com/op/view.aspx?src=' + temObj.fileUrl
        )
      } else if (
        (temObj.fileExt === '.pptx' ||
          temObj.fileExt === '.ppt' ||
          temObj.fileExt === '.docx' ||
          temObj.fileExt === '.doc') &&
        temObj.fileSize > 10480000
      ) {
        this.$notify({
          title: '提示',
          message: '文档体积过大无法预览，即将开始下载',
          type: 'warning'
        })
        setTimeout(() => {
          window.open(temObj.fileUrl)
        }, 1500)
      } else if (
        (temObj.fileExt === '.xlsx' || temObj.fileExt === '.xls') &&
        temObj.fileSize > 5120000
      ) {
        this.$notify({
          title: '提示',
          message: '文档体积过大无法预览，即将开始下载',
          type: 'warning'
        })
        setTimeout(() => {
          window.open(temObj.fileUrl)
        }, 1500)
      } else {
        window.open(temObj.fileUrl)
      }
    },
    delData(id) {
      delMaterials(this.productId, id).then(res => {
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success'
        })
        this.getMaterialsList()
      })
    },
    exceed() {
      this.$notify({
        title: '注意',
        message: '文件只能单个上传',
        type: 'warning'
      })
    },
    handleSuccess(res, file) {
      const obj = {
        name: file.name,
        url: this.strategy.domain + res.key,
        hash: res.hash,
        size: file.size
      }
      this.materialsParam = [obj]
      const param = {
        materials: this.materialsParam
      }
      addMaterials(param, this.productId)
        .then(res => {
          this.$notify({
            title: '成功',
            message: '上传资料成功',
            type: 'success'
          })
          // this.showfilelist = false
          this.fileList = []
          // this.$refs.upload.clearFiles()
          this.materialsParam = []
          this.getMaterialsList()
          this.qiniuData.key = ''
          this.getNews(scrollTo)
        })
        .catch(() => {
          this.qiniuData.key = ''
          this.materialsParam = []
        })
    },
    handleSuccess2(res, file) {
      const obj = {
        name: file.name,
        url: this.strategy.domain + res.key,
        hash: res.hash,
        size: file.size
      }
      this.materialsParam = [obj]
      const param = {
        materials: this.materialsParam
      }
      addApprData(param, this.productId)
        .then(res => {
          this.$notify({
            title: '成功',
            message: '添加审核资料成功',
            type: 'success'
          })
          this.fileList2 = []
          this.materialsParam = []
          // this.getMaterialsList()
          this.getCurrMaterials()
          this.qiniuData.key = ''
          this.getNews(scrollTo)
        })
        .catch(() => {
          this.qiniuData.key = ''
          this.materialsParam = []
        })
    },
    // 获取资料列表
    getMaterialsList() {
      materialsList(this.productId).then(res => {
        this.detail.materials = res
        this.materialsNum = res.length
      })
    },
    beforeUpload(file) {
      this.uniqueNum++
      // uniqueNum用来保证key的唯一性
      const timestamp = new Date().getTime()
      // let key = `${this.uniqueNum}/${lastId}/${timestamp}/${file.name}`
      const key = `${this.uniqueNum}/${timestamp}/${file.name}`
      this.qiniuData.key = key
    },
    // 项目资料上传策略
    getStrategy() {
      uploadStrategy().then(res => {
        this.strategy = res
        this.qiniuData.token = res.uploadToken
      })
    },
    // 确认选择
    sureSelect() {
      const arr = []
      for (let i = 0; i < this.selectedMember.length; i++) {
        arr.push(this.selectedMember[i].id)
      }
      // this.selectForm2为true 表示从右侧项目参与人处添加成员
      if (this.selectForm2) {
        const param = {
          stepId: this.executorsBySteps[this.stepIndex].id,
          executorIds: arr
        }
        addExecutors(param, this.productId).then(res => {
          this.$notify({
            title: '成功',
            message: '添加成功',
            type: 'success'
          })
          this.selectForm2 = false
          this.selectedMember = []
          this.getExecutors()
          this.getJoiner()
          this.getJoiner2()
          this.getCheckInfo()
          // this.addPanel = true
          this.getNews(scrollTo)
        })
      } else {
        const param = {
          stepId: this.detail.currStepId,
          executorIds: arr
        }
        addExecutors(param, this.productId).then(res => {
          this.$notify({
            title: '成功',
            message: '添加成功',
            type: 'success'
          })
          this.selectForm1 = false
          this.selectedMember = []
          this.getJoiner()
          this.childTaskList[this.markIndex].visible = true
          this.getNews(scrollTo)
        })
      }
    },
    // 取消选择
    cancelSelect() {
      if (this.selectForm1) {
        this.childTaskList[this.markIndex].visible = true
      } else {
        this.addPanel = true
      }
      this.selectForm1 = false
      this.selectForm2 = false
      this.selectedMember = []
    },
    // 删除预选成员
    delSelectId(id) {
      for (let i = 0; i < this.selectedMember.length; i++) {
        if (id === this.selectedMember[i].id) {
          this.selectedMember.splice(i, 1)
        }
      }
    },
    // 添加成员的输入框选择1
    treeCheck() {
      this.selectedMember = []
      // this.getCheckedNodes()
      const aa = this.$refs.tree.getCheckedNodes()
      for (let i = 0; i < aa.length; i++) {
        if (aa[i].type === 2) {
          const name1 = aa[i].label.split('').reverse()
          const nickname = name1[1] + name1[0]
          const obg = {
            name: aa[i].label,
            id: aa[i].id,
            checked: false,
            nickname: nickname,
            orgName: aa[i].memOrgName
          }

          this.selectedMember.push(obg)
        }
      }
    },
    // 树形控件过滤
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    // 获取完整组织成员架构
    getStructures() {
      memberStructures().then(res => {
        this.memberStructures = res
      })
    },
    // 删除子任务
    delTask(id) {
      delTask(this.productId, id).then(() => {
        this.$notify({
          title: '成功',
          message: '删除子任务成功',
          type: 'success'
        })
        this.getTaskList()
        this.getNews(scrollTo)
      })
    },
    // 展示从部门中获取成员框
    getFromDepart(index) {
      this.markIndex = index
      this.getStructures()
      this.selectForm1 = true
    },
    // 搜索成员
    searchPerson() {
      this.getJoiner()
    },
    // 添加子任务
    saveChildTask() {
      const param = {
        name: this.childTaskName
      }
      addTask(param, this.productId).then(res => {
        this.$notify({
          title: '成功',
          message: '添加成功',
          type: 'success'
        })
        this.preAddTask = false
        this.getTaskList()
        this.getNews(scrollTo)
      })
    },
    // 设置子任务执行人
    selectJoiner(index, executorId, subtaskId) {
      // 选择的执行人id
      this.executorId = executorId

      const param = {
        executorId: this.executorId
      }
      setExecutor(param, this.productId, subtaskId).then(res => {
        this.$notify({
          title: '成功',
          message: '设置成功',
          type: 'success'
        })
        this.childTaskList[index].visible = false
        this.executorId = ''
        this.getTaskList()
        this.getNews(scrollTo)
        // this.$refs.popover.style.display = 'none'
      })
    },
    // 获取参与人
    getJoiner() {
      const param = {
        keyword: this.keyword
      }
      getParticipants(param, this.productId).then(res => {
        for (let i = 0; i < res.length; i++) {
          var name1 = res[i].name.split('').reverse()
          if (name1.length === 1) {
            res[i].nickname = name1[0]
          } else {
            res[i].nickname = name1[1] + name1[0]
          }
        }
        this.joiner = res
        this.joinerNum = res.length
        const obj = {
          name: '待分配',
          id: null
        }
        this.joiner.unshift(obj)
      })
    },
    // 获取参与人2
    getJoiner2() {
      const param = {
        keyword: this.keyword,
        includeMyself: false
      }
      getParticipants(param, this.productId).then(res => {
        for (let i = 0; i < res.length; i++) {
          var name1 = res[i].name.split('').reverse()
          if (name1.length === 1) {
            res[i].nickname = name1[0]
          } else {
            res[i].nickname = name1[1] + name1[0]
          }
        }
        const arr = [
          {
            name: '所有人',
            nickname: '@',
            id: '所有人'
          }
        ]
        const res2 = arr.concat(res)
        // res2.unshift(obj)
        this.joiner2 = res2
      })
    },
    // 取消增加子任务
    cancelAddTask() {
      this.preAddTask = false
    },
    // 准备添加子任务
    addTask() {
      this.preAddTask = true
      this.childTaskName = ''
    },
    // 子任务列表
    getTaskList() {
      taskList(this.productId).then(res => {
        for (let i = 0; i < res.length; i++) {
          res.visible = false
          var name1 = res[i].executorName.split('').reverse()
          if (name1.length === 1) {
            res[i].nickname = name1[0]
          } else {
            res[i].nickname = name1[1] + name1[0]
          }
        }
        this.childTaskList = res
        this.childTaskNum = res.length
      })
    },
    // 更改开始日期
    handleChange() {
      const param = {
        startDateStr: this.startTime
      }
      updateStartTime(param, this.productId).then(() => {
        this.getNews(scrollTo)
      })
    },
    // 更改结束日期
    handleChange2() {
      const param = {
        endDateStr: this.endTime
      }
      updateEndTime(param, this.productId).then(() => {
        this.getNews(scrollTo)
      })
    },
    getDetail() {
      projectDetail(this.productId).then(res => {
        this.detail = res
        // 项目已完成但是未归档的情况，改变聊天框的高度
        if (res.completionFlag == 1 && res.archivingFlag == 0) {
          this.$set(this.newsHeight, 'height', 'calc(100% - 186px')
        }
        this.materialsNum = res.materials.length
        this.startTime = res.startDateStr
        this.endTime = res.endDateStr
        this.publicValue = res.publicFlag
        this.degree = res.urgencyDegree
      })
    },
    // 切换more图标的显示
    checkMore(index) {
      if (index === 1) {
        this.moreValue = 2
      } else if (index === 2) {
        this.moreValue = 1
      }
    },
    // 切换紧急程度
    selectDegree(id) {
      this.degree = id
      const param = {
        urgencyDegree: this.degree
      }
      updateDegree(param, this.productId).then(() => {
        this.$notify({
          title: '成功',
          message: '更改成功',
          type: 'success'
        })
        this.getNews(scrollTo)
      })
    },
    // 选择是否公开
    async selectPublic(index) {
      if (index === 0) {
        this.publicValue = 1
        const param = {
          publicFlag: this.publicValue
        }
        await updatePublic(param, this.productId).then(() => {
          this.$notify({
            title: '切换成功',
            message: '当前为所有人可见',
            type: 'success'
          })
        })
        this.getNews(scrollTo)
      } else if (index === 1) {
        this.publicValue = 0
        const param = {
          publicFlag: this.publicValue
        }
        await updatePublic(param, this.productId).then(() => {
          this.$notify({
            title: '切换成功',
            message: '当前为仅参与人可见',
            type: 'success'
          })
        })
        this.getNews(scrollTo)
      } else if (index === 2) {
        await archive(this.productId).then(res => {
          this.$notify({
            title: '成功',
            message: '归档成功',
            type: 'success'
          })
          this.getDetail()
        })
        this.getNews(scrollTo)
      }
    }
  }
}
</script>

