import { Injectable } from '@angular/core';
import {JoinRequest} from '../../../_models/join-request';
import {InviteRequest} from '../../../_models/invite-request';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  joinRequestCount = 4;
  inviteRequestCount = 5;
  allJoinRequests: JoinRequest[];
  allInviteRequests: InviteRequest[];

  constructor() {
    this.allJoinRequests = this.getJoinRequests();
    this.allInviteRequests = this.getInviteRequests();
  }

  getInviteRequests(): InviteRequest[] {
    return JSON.parse(localStorage.getItem('invitations') as string);
  }

  getInviteRequestsOfUser(username: string): InviteRequest[] {
    return this.getInviteRequests().filter(request => request.user.userName === username);
  }

  getJoinRequests(): JoinRequest[] {
    return JSON.parse(localStorage.getItem('requests') as string);
  }

  getJoinRequestsOfUser(username: string): InviteRequest[] {
    return this.getJoinRequests().filter(request => request.user.userName === username);
  }

  setJoinRequests(joinRequests: JoinRequest[]): void {
    localStorage.setItem('requests', JSON.stringify(joinRequests));
  }

  setInviteRequests(inviteRequest: InviteRequest[]): void {
    localStorage.setItem('invitations', JSON.stringify(inviteRequest));
  }

  createJoinRequest(joinRequest: JoinRequest): void {
    const requests = this.getJoinRequests();
    requests.push(joinRequest);
    this.setJoinRequests(requests);
  }

  createInviteRequest(inviteRequest: InviteRequest): void {
    const requests = this.getInviteRequests();
    requests.push(inviteRequest);
    this.setInviteRequests(requests);
  }

  deleteJoinRequest(requestId: number): void {
    console.log(this.allJoinRequests);
    const index = this.allJoinRequests.map(joinRequest => joinRequest.id).indexOf(requestId);
    if (index !== 1) { this.allJoinRequests.splice(index, 1); }
    this.setJoinRequests(this.allJoinRequests);
    console.log(this.allJoinRequests);
  }

  deleteInviteRequest(requestId: number): void {
    console.log(this.allInviteRequests);
    const index = this.allInviteRequests.map(inviteRequest => inviteRequest.id).indexOf(requestId);
    if (index !== 1) { this.allInviteRequests.splice(index, 1); }
    this.setInviteRequests(this.allInviteRequests);
    console.log(this.allInviteRequests);
  }

  updateJoinRequest(request: JoinRequest, status: string): void {
    console.log(this.allJoinRequests);
    this.deleteJoinRequest(request.id);
    console.log(this.allJoinRequests);
    request.status = status;
    this.allJoinRequests.push(request);
    this.setJoinRequests(this.allJoinRequests);
    console.log(this.allJoinRequests);
  }

  updateInviteRequest(request: JoinRequest, status: string): void {
    this.deleteInviteRequest(request.id);
    console.log(this.allInviteRequests);
    request.status = status;
    this.allInviteRequests.push(request);
    this.setInviteRequests(this.allInviteRequests);
    console.log(this.allInviteRequests);
  }
}
