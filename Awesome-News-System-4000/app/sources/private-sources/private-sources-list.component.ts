import { Component, OnInit } from '@angular/core';

import { SourcesService } from '../sources.service';
import { UserService } from '../../core/services/user.service';
import { Source } from '../../core/models/source-model';
import { User } from '../../core/models/user-model';

@Component({
    templateUrl: 'private-sources-list.component.html'
})
export class PrivateSoursesListComponent implements OnInit {
    private sources: Source[];
    private user: User;
    private selectedMediaItem: any;
    private selectedMediaList: any[] = [];

    constructor(private sourcesService: SourcesService, private userService: UserService) {
        this.user = JSON.parse(localStorage.getItem('currentUser')).user;
    }

    getSources() {
        return this.sourcesService.getSources()
            .subscribe(
            sources => {
                this.sources = sources;
            },
            err => console.error(err));
    }


    onClicked(source: Source, event: any) {
        let index = this.selectedMediaList.indexOf(event.target.value);

        if (event.target.checked && index < 0) {
            this.selectedMediaList.push(event.target.value);
        }

        if (!event.target.checked && index > -1) {
            this.selectedMediaList.splice(index, 1);
        }

        this.user.selectedMedia = [];
        for (let i = 0; i < this.selectedMediaList.length; i++) {
            for (let j = 0; j < this.sources.length; j++) {
                if (this.sources[j].name === this.selectedMediaList[i]) {
                    this.user.selectedMedia.push(this.sources[j].name);
                }
            }
        }
    }

    updateUserWithSelectedSources(): void {
        this.userService.updateSelectedMediaSources(this.user).subscribe();
    }

    ngOnInit() {
        this.getSources();
    }
}