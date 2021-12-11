/* eslint-disable react/no-unknown-property */
import React from "react";
import "./card.less";
import { Row, Col, Checkbox, Button } from "antd";
import PropTypes from "prop-types";
import Del from "@/assets/svg/export.svg";
import Add from "@/assets/svg/add.svg";
import Edit from "@/assets/svg/edit.svg";

export const Card = (props) => {
  const { isShowCheck, isDefault, content, title, onCheck, onEdit, onDel, butIsDisable, isdisable } =
    props;
  console.log('isdisable', isdisable);
  return (
    <div className="shipperDetail_card refCard">
      <Row gutter={12} className="wrapper">
        <Col span={14} className="item">
          <div className="text-overflow" title={title}>{title}</div>
          {isShowCheck && isDefault && (
            <span className="card_but">Default</span>
          )}
        </Col>

        <Col span={10}  className="item-right" >
          {/* #e4e9fo */}
          <span className="item-right-but" onClick={!isdisable.edit ? onEdit : undefined}>
            {
              !isdisable.edit && (
                <>
                  <Edit  className="item-right-but-svg"   />
                  <a>Edit</a>
                </>
              )
            }
          </span>
          <span className="item-right-but" onClick={!isdisable.del ? onDel : undefined}>
            {
               !isdisable.del && (
                 <>
                   <Del className="item-right-but-svg" />
                   <a >Delete</a>
                 </>
               )
            }
          </span>
        </Col>
        <Col span={24} className="content text-overflow">
          {content}
        </Col>

        {
          isShowCheck &&
            <Col span={24}>
              {
                <Checkbox
                  onChange={(e) => onCheck(e.target.checked)}
                  className="footer"
                  checked={isDefault}
                  disabled={isDefault}
                >
                  <span style={{ color: '#ffffff' }}>Default</span>
                </Checkbox>
              }
            </Col>
        }
      </Row>
    </div>
  );
};
Card.defaultProps = {
  isShowCheck: true,
  isdisable: {
    edit: false,
    del: false
  },
  onCheck: () => { },
  butIsDisable: false
};
Card.propTypes = {
  content: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onEdit: PropTypes.func,
  onDel: PropTypes.func,
  onCheck: PropTypes.func,
  butIsDisable: PropTypes.bool,
  isdisable: PropTypes.object,
  isDefault: PropTypes.bool, // 显示是否出现默认按钮
  isShowCheck: PropTypes.bool, // 显示是否有多选
};

//  添加的卡片
export const AddCard = (props) => {
  const { content, onAdd, height } = props;
  return (
    <div
      className="shipperDetail_card shipperDetail_add_card"
      onClick={onAdd}
      style={{
        height: `${height}px`,
      }}
    >
      <Row gutter={20} className="wrapper">
        <Col span={18} className="content">
          <p>{content}</p>
          <span className="content-diver"></span>
          <span className="content-diver"></span>
        </Col>
        <Col span={6} className="content _content">
          <Add />
        </Col>
        <Col span={24}></Col>
      </Row>
    </div>
  );
};

AddCard.defaultProps = {
  onAdd: () => { },
  height: '160'
};

AddCard.propTypes = {
  content: PropTypes.node,
  onAdd: PropTypes.func,
  height: PropTypes.string,
};
