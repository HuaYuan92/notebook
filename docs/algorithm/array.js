// 1. 合并连个有序数组
// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。
//
// 说明:
//   初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n ）来保存 nums2 中的元素。
// 示例:
// 输入:
//   nums1 = [1,2,3,0,0,0], m = 3
//   nums2 = [2,5,6],       n = 3
//
// 输出: [1,2,2,3,5,6]
const merger = function (nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  if (len2 >= 0) {
    if (len1 < 0) {
      nums1[len--] = nums2[len2--]
      continue
    }
    nums1[len--] = nums2[len2] > nums1[len1] ? nums2[len2--] : nums1[len1]--;
  }
}
// 2. 两数之和
// 给定一个整数数组 nums 和一个目标值 target ，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
// 示例:
//
// 给定 nums = [2, 7, 11, 15], target = 9
//
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

const twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let k = target - nums[i]
    if (map.has(k)) {
      return [map.get(k), i]
    }
    map.set(nums[i], i)
  }
  return [];
};
