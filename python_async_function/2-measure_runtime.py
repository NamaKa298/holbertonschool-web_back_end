#!/usr/bin/env python3
"""2. Measure the runtime"""


import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Create a measure_time function with integers n
    and max_delay as arguments that measures the total
    execution time for wait_n(n, max_delay), and returns
    total_time / n. Your function should return a float."""
    listOfDelay = asyncio.run(wait_n(n, max_delay))
    total_time = 0
    for i in range(n):
        total_time += listOfDelay[i]
    return total_time / n
