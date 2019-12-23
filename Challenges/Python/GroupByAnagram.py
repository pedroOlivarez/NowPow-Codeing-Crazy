class Solution(object):
    def groupAnagrams(self, strs):
        results = dict()
        returnValue = []

        for string in strs:
            stringTokens = list(string)
            stringTokens.sort()
            orderedString = "".join(stringTokens)
            if results.__contains__(orderedString):
                entry = results.get(orderedString)
                entry.append(string)
                results[orderedString] = entry
            else:
                results[orderedString] = [string]

        for result in results.values():
            returnValue.append(result)

        return returnValue
