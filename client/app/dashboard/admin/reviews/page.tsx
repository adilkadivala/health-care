/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { IconStarFilled, IconStarHalfFilled, IconMessage } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 1,
    patient: "Eleanor Pena",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    rating: 5,
    date: "Oct 24, 2026",
    comment: "The care I received at this facility was exceptional. The doctors were very attentive and the nursing staff was incredibly kind and helpful during my stay.",
    department: "Cardiology",
    status: "Published",
  },
  {
    id: 2,
    patient: "Jerome Bell",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026702d",
    rating: 4,
    date: "Oct 22, 2026",
    comment: "Good experience overall. The wait times were a bit long in the emergency room, but once I was seen, the medical care was top-notch.",
    department: "Emergency",
    status: "Published",
  },
  {
    id: 3,
    patient: "Dianne Russell",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026701d",
    rating: 2,
    date: "Oct 20, 2026",
    comment: "I had issues with the billing department not applying my insurance correctly. Took several phone calls to resolve.",
    department: "Billing",
    status: "Pending Review",
  },
  {
    id: 4,
    patient: "Courtney Henry",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026703d",
    rating: 5,
    date: "Oct 18, 2026",
    comment: "Dr. Jenkins is brilliant! She took the time to listen to all my concerns and explained my treatment options clearly. Highly recommend.",
    department: "Neurology",
    status: "Published",
  }
]

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Reviews() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Patient Reviews</h2>
          <p className="text-muted-foreground">
            Manage feedback and reviews from patients to improve care quality.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <IconStarFilled className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground">+0.2 from last month</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
            <IconMessage className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Positive Rate</CardTitle>
            <IconStarFilled className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">4 and 5 star reviews</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Needs Attention</CardTitle>
            <IconStarHalfFilled className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-muted-foreground">Pending response or action</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Recent Feedback</CardTitle>
          <CardDescription>
             The latest reviews submitted by patients after their visits.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="flex flex-col sm:flex-row gap-4 border-b last:border-0 pb-6 last:pb-0">
                <Avatar className="h-10 w-10 mt-1">
                  <AvatarImage src={review.avatar} alt={review.patient} />
                  <AvatarFallback>{review.patient.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-sm">{review.patient}</h4>
                      <p className="text-xs text-muted-foreground">{review.date} • {review.department}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                       <Badge variant={review.status === 'Published' ? 'outline' : 'secondary'} className={review.status === 'Published' ? 'border-primary/20 text-primary bg-primary/5' : ''}>
                         {review.status}
                       </Badge>
                       <div className="flex text-amber-500">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <IconStarFilled key={i} className={`w-3 h-3 ${i < review.rating ? 'text-amber-500' : 'text-gray-300 dark:text-gray-700'}`} />
                          ))}
                        </div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                   "{review.comment}"
                  </p>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="h-7 text-xs">Reply</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Reply to {review.patient}</DialogTitle>
                          <DialogDescription>
                            Write a public response to this review.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="reply">Your Response</Label>
                            <Textarea id="reply" placeholder="Thank you for your feedback..." className="h-32" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Post Reply</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    {review.status === 'Pending Review' && <Button size="sm" className="h-7 text-xs bg-primary text-primary-foreground">Approve</Button>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
