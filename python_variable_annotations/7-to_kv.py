#!/usr/bin/env python3
from typing import Union, Tuple
"""7. Complex types - string and int/float to tuple"""


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Retourne un tuple"""
    return (k, v ** 2)