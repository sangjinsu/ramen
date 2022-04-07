import logging
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger
from .utils.algo import train_ai

logger = logging.getLogger(__name__)


def start():
    scheduler=BackgroundScheduler()
    scheduler.add_job(
        train_ai,
        trigger=CronTrigger(minute='*/5'),
        id="train_job",  # The `id` assigned to each job MUST be unique
        max_instances=1,
        replace_existing=True,
    )
    try:
        logger.info("Starting scheduler...")
        scheduler.start()
    except KeyboardInterrupt:
        logger.info("Stopping scheduler...")
        scheduler.shutdown()
        logger.info("Scheduler shut down successfully!")