import React from 'react';
import { BarChart3, Target, Activity, CheckCircle2, TrendingUp, Compass, Search, Database, Layers } from 'lucide-react';
import { mealMethodologySteps, mePerformanceMetrics, meQuarterlyTrends } from '../data/portfolioData';

export default function MealMethodology() {
  return (
    <section className="section meal-section" id="meal-framework">
      <div className="wrap">
        <div className="section-header">
          <div className="eyebrow-badge">
            <Activity size={14} /> M&E Methodology & Data Analytics
          </div>
          <h2 className="section-title">
            <Target size={24} /> 7-Step MEAL Framework & Performance Metrics
          </h2>
          <p className="section-subtitle">
            A systematic, data-driven methodology for monitoring, evaluation, accountability, and continuous learning across conservation and biometrics programs.
          </p>
        </div>

        {/* 7-Step MEAL Methodology Grid */}
        <div className="meal-grid">
          {mealMethodologySteps.map((item) => (
            <div key={item.step} className="meal-card">
              <div className="meal-step-header">
                <span className="meal-step-number">{item.step}</span>
                <div className="meal-step-titles">
                  <h3 className="meal-step-name">{item.title}</h3>
                  <span className="meal-step-sub">{item.subtitle}</span>
                </div>
              </div>
              <p className="meal-step-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* M&E Data Insights & Performance Indicators */}
        <div className="me-dashboard-grid">
          {/* Left Column: Progress Indicators */}
          <div className="me-dashboard-card">
            <div className="me-card-header">
              <CheckCircle2 size={20} className="me-icon-cyan" />
              <div>
                <h3>Key Performance Indicators</h3>
                <p>Data Accuracy, Timeliness & Stakeholder Engagement</p>
              </div>
            </div>

            <div className="metrics-bars-list">
              {mePerformanceMetrics.map((metric) => (
                <div key={metric.label} className="metric-bar-item">
                  <div className="metric-bar-head">
                    <span className="metric-bar-label">{metric.label}</span>
                    <span className="metric-bar-val">{metric.value}%</span>
                  </div>
                  <div className="metric-track">
                    <div
                      className="metric-fill"
                      style={{ width: `${metric.value}%`, backgroundColor: metric.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quarterly Trend Metrics */}
          <div className="me-dashboard-card">
            <div className="me-card-header">
              <TrendingUp size={20} className="me-icon-cyan" />
              <div>
                <h3>Quarterly Target vs. Achieved Trends</h3>
                <p>Monitoring Indicator Outputs Across Cycles</p>
              </div>
            </div>

            <div className="trends-chart-container">
              <div className="trends-bar-chart">
                {meQuarterlyTrends.map((q) => (
                  <div key={q.quarter} className="chart-column">
                    <div className="chart-bars-group">
                      <div
                        className="chart-bar target-bar"
                        style={{ height: `${(q.target / 80) * 100}%` }}
                        title={`Target: ${q.target}`}
                      >
                        <span className="bar-val">{q.target}</span>
                      </div>
                      <div
                        className="chart-bar achieved-bar"
                        style={{ height: `${(q.achieved / 80) * 100}%` }}
                        title={`Achieved: ${q.achieved}`}
                      >
                        <span className="bar-val">{q.achieved}</span>
                      </div>
                    </div>
                    <span className="chart-quarter-label">{q.quarter}</span>
                    <span className="chart-pct-tag">{q.pct}</span>
                  </div>
                ))}
              </div>

              <div className="chart-legend">
                <div className="legend-item">
                  <span className="legend-box target-box"></span>
                  <span>Target Indicators</span>
                </div>
                <div className="legend-item">
                  <span className="legend-box achieved-box"></span>
                  <span>Achieved Outputs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
