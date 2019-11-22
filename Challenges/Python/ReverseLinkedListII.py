# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution(object):
    def reverseBetween(self, head, start, stop):
        nodeBeforeReverse = None
        nodeAfterReverse = None
        reversedSectionHead = None
        reversedSectionEnd = None
        index = 1
        nodeBeforeReverseIndex = start - 1
        nodeAfterReverseIndex = stop + 1
        current = head
        reversedCurrent = None
        reversedPrevious = None
        while current is not None and index <= nodeAfterReverseIndex:
            if index >= nodeBeforeReverseIndex and index <= nodeAfterReverseIndex:
                if index == nodeBeforeReverseIndex:
                    nodeBeforeReverse = current
                elif index == nodeAfterReverseIndex:
                    nodeAfterReverse = current
                else:
                    reversedCurrent = ListNode(current.val)
                    if reversedPrevious:
                        reversedCurrent.next = reversedPrevious
                    if index == start:
                        reversedSectionEnd = reversedCurrent
                    if index == stop:
                        reversedSectionHead = reversedCurrent
                    reversedPrevious = reversedCurrent
            current = current.next
            index += 1
        if nodeBeforeReverse:
            nodeBeforeReverse.next = reversedSectionHead
        reversedSectionEnd.next = nodeAfterReverse
        return (reversedSectionHead, head)[nodeBeforeReverse is not None]
