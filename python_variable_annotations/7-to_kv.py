#!/usr/bin/python3
from typing import Union, Tuple

def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Retourne un tuple"""
    return (k, v ** 2)