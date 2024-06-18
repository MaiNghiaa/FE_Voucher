def solution(n):
    if n % 2 != 0:
        return 0
    if n == 0:
        return 1 
    if n == 2:
        return 1

    dp = [0] * (n + 1)
    dp[0] = 1  # Base case: container 4x0
    dp[1] = 0  # No way to fill a 4x1 container with 1x2 blocks
    dp[2] = 1  # Base case: container 4x2

    # Fill dp array for all even lengths
    for i in range(4, n + 1, 2):
        dp[i] = dp[i - 2] + 2 * sum(dp[i - j] for j in range(4, i, 2))

    return dp[n]

# Test the function
print("solution(1) =", solution(1))  # Output should be 1
print("solution(4) =", solution(4))  # Output should be 36
