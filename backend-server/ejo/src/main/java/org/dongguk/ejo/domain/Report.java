package org.dongguk.ejo.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.ejo.dto.type.EType;

import java.time.LocalDateTime;

@Entity
@Table(name = "`reports`")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Report {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String url;

    private EType type;

    private LocalDateTime createdAt;

    @Builder
    public Report(Long id, String url, EType type) {
        this.id = id;
        this.url = url;
        this.type = type;
        this.createdAt = LocalDateTime.now();
    }
}