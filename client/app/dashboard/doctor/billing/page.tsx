"use client"

import React, { useEffect } from 'react'
import { api } from "@/lib/http"

const Billing = () => {
  useEffect(() => {
    void api.get("/doctor/billing").catch(() => undefined)
  }, [])

  return (
    <div>Billing</div>
  )
}

export default Billing