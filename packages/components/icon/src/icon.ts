// props等公共的方法
import type { ExtractPropTypes } from "vue";
export const iconProps = {
  size: {
    type: Number,
  },
  color: {
    type: String,
  },
};
// 包装一下实际的props，返回对应的类型

export type IconProps = ExtractPropTypes<typeof iconProps>;
